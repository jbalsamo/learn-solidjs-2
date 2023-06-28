import { createEffect, createSignal, For } from "solid-js";
import { sharps } from "../App";
import MyPagination from "../components/MyPagination";
import SharpCard from "../components/SharpCard";
import styles from "./Home.module.css";

const [offset, setOffset] = createSignal(0);
const [limit, setLimit] = createSignal(10);
const [page, setPage] = createSignal(1);
const [pages, setPages] = createSignal([]);
const [total, setTotal] = createSignal(0);

const Home = () => {
  createEffect(() => {
    setTotal(sharps().length);
    let totalPages = Math.ceil(sharps().length / limit());
    const pageArray = [];
    for (let i = 1; i <= totalPages; i++) {
      pageArray.push(i);
    }
    setPages(pageArray);
  });
  return (
    <>
      <div>
        <h2>List of SHARP Projects</h2>
        <div class={styles.pagination}>
          <MyPagination />
        </div>
      </div>
      <For each={sharps().slice(offset(), offset() + limit())}>
        {(sharp) => <SharpCard sharp={sharp} />}
      </For>
    </>
  );
};

export { limit, offset, page, pages, setLimit, setOffset, setPage, total };

export default Home;
