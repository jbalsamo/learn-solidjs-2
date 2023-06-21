import { likedSharps, setLikedSharps } from "../pages/Favorites";

const likeSharp = (sharp) => {
  setLikedSharps([sharp, ...likedSharps()]);
};

const unLikeSharp = (sharpId) => {
  const sharpState = likedSharps()?.filter(
    (item) => item.project_title !== sharpId
  );
  setLikedSharps(sharpState);
};

const isFavorite = (sharpId: string) => {
  const sharps = likedSharps()?.filter(
    (item) => item.project_title === sharpId
  );
  return sharps?.length > 0;
};

const SharpCard = ({ sharp }) => {
  return (
    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        Type is {sharp.project_output_type}
      </div>
      <div class="card-body">
        <p>
          <strong>Title: </strong> {sharp.project_title}
        </p>
        <p>
          <strong>Contributors: </strong> {sharp.contributors_team}
        </p>
        <p class="card-text">
          <strong>Description: </strong> {sharp.project_description}
        </p>
      </div>
      <div class="card-footer">
        {isFavorite(sharp.project_title) ? (
          <button
            class="btn btn-danger"
            onclick={() => unLikeSharp(sharp.project_title)}
          >
            UnLike
          </button>
        ) : (
          <button class="btn btn-primary" onclick={() => likeSharp(sharp)}>
            Like
          </button>
        )}
      </div>
    </div>
  );
};

export default SharpCard;
