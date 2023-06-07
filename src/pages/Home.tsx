import { createEffect, createSignal, For } from "solid-js";
import { sharps } from "../App";
import SharpCard from "../components/SharpCard";

const Home = () => {
  return (
    <>
      <div>
        <h2>List of SHARP Projects</h2>
      </div>
      <For each={sharps().slice(0, 10)}>
        {(sharp) => <SharpCard sharp={sharp} />}
      </For>
    </>
  );
};

export default Home;
