import { Route, Routes } from "@solidjs/router";
import type { Component } from "solid-js";
import { createEffect, createSignal } from "solid-js";
import Header from "./components/Header";
import Home from "./pages/Home";
import LikedSharps from "./pages/LikedSharps";

const [sharps, setSharps] = createSignal([]);

createEffect(async () => {
  const res = await fetch(
    `https://www.healthit.gov/data/open-api?source=sharp-projects-outputs.csv`
  );
  const json = await res.json();
  setSharps(json);
});

const App: Component = () => {
  return (
    <div class="container">
      <Header />
      <Routes>
        <Route element={<Home />} end path="/" />
        <Route element={<LikedSharps />} path="/likedsharps" />
      </Routes>
    </div>
  );
};

export { sharps, setSharps };

export default App;
