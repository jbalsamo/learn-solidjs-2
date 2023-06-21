import { createSignal, For } from "solid-js";
import SharpCard from "../components/SharpCard";

const [likedSharps, setLikedSharps] = createSignal([]);

const Favorites = () => {
  return (
    <div>
      <h1>Favorites</h1>
      <div>
        <For each={likedSharps()}>{(sharp) => <SharpCard sharp={sharp} />}</For>
      </div>
    </div>
  );
};

export { likedSharps, setLikedSharps };
export default Favorites;
