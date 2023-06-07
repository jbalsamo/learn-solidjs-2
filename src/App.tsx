import { Route, Routes } from "@solidjs/router";
import type { Component } from "solid-js";
import Header from "./components/Header";
import Home from "./pages/Home";

const App: Component = () => {
  return (
    <div class="container">
      <Header />
      <Routes>
        <Route element={<Home />} end path="/" />
      </Routes>
    </div>
  );
};

export default App;
