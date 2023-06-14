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
        <button class="btn btn-primary">Like</button>
      </div>
    </div>
  );
};

export default SharpCard;
