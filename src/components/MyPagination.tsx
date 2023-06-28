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

  return (
    <>
      <Container>
        <Row>
          <Pagination.Prev
            onclick={() => {
              prev();
            }}
          />
          <Pagination.Next
            onclick={() => {
              next();
            }}
          />
        </Row>
      </Container>
    </>
  );
};

export default MyPagination;
