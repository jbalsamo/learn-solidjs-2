import { Col, Container, Form, Pagination, Row } from "solid-bootstrap";
import type { Component } from "solid-js";
import { For, Show } from "solid-js";
import {
  limit,
  offset,
  page,
  pages,
  setLimit,
  setOffset,
  setPage,
  total,
} from "../pages/Home";
import styles from "./Pagination.module.css";

const MyPagination: Component = () => {
  const prev = () => {
    if (page() > 1) {
      setOffset(offset() - limit());
      setPage(page() - 1);
    }
  };
  const next = () => {
    setOffset(offset() + limit());
    setPage(page() + 1);
  };
  const first = () => {
    setOffset(0);
    setPage(1);
  };
  const last = () => {
    setOffset(limit() * Math.floor(total() / limit()));
    setPage(Math.ceil(total() / limit()));
  };
  const currentPages = () => {
    let lastPage = Math.ceil(total() / limit());
    let retpgs = [];
    if (page() <= 3) {
      retpgs = pages().slice(0, 5);
    } else if (page() == lastPage) {
      retpgs = pages().slice(lastPage - 5);
    } else {
      retpgs = pages().slice(page() - 3, page() + 2);
    }
    return retpgs;
  };
  const changePage = (page: number) => {
    setOffset((page - 1) * limit());
    setPage(page);
  };
  const isActive = (cpage: number) => page() == cpage;

  return (
    <>
      <Container>
        <Row>
          <Col class={styles.pagination} md={8}>
            <Pagination size="sm">
              <Pagination.First
                onclick={() => {
                  first();
                }}
              />
              <Pagination.Prev
                onclick={() => {
                  prev();
                }}
              />
              <Show when={page() > 3}>
                <Pagination.Ellipsis />
              </Show>
              <For each={currentPages()}>
                {(page) => (
                  <>
                    {/* Show the active page which is not clickable */}
                    <Show when={isActive(page)}>
                      <Pagination.Item active>{page}</Pagination.Item>
                    </Show>
                    {/* show a n "inactive" clickable page link */}
                    <Show when={!isActive(page)}>
                      <Pagination.Item
                        onclick={() => {
                          changePage(page);
                        }}
                      >
                        {page}
                      </Pagination.Item>
                    </Show>
                  </>
                )}
              </For>
              <Show when={page() < pages().length - 2}>
                <Pagination.Ellipsis />
              </Show>
              <Pagination.Next
                onclick={() => {
                  next();
                }}
              />
              <Pagination.Last
                onclick={() => {
                  last();
                }}
              />
            </Pagination>
          </Col>
          <Col class={styles.label} md={2}>
            <label class={styles.label} for="perPage">
              Items Per Page:
            </label>
          </Col>
          <Col class={styles.pagination}>
            <Form.Select
              id="perPage"
              value={limit()}
              onchange={(event) => {
                setLimit(+event.target.value);
              }}
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </Form.Select>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MyPagination;
