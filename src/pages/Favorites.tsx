import { createSignal } from "solid-js";

const [likedSharps, setLikedSharps] = createSignal([]);

const Favorites = () => {
  return (
    <div>
      <h1>Favorites</h1>
    </div>
  );
};

export { likedSharps, setLikedSharps };
export default Favorites;
