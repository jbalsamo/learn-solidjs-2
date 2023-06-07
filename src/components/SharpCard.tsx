const SharpCard = ({ sharp }) => {
  return (
    <div class="card mb-3">
      <div class="card-header bg-primary text-white">
        Type is {sharp.project_output_type}
      </div>
    </div>
  );
};

export default SharpCard;
