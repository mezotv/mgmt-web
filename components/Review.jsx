const Review = ({ name, description, rank }) => {
  return (
    <>
      <h3>{name}</h3>
      <p>{description}</p>
      <h4>{rank}</h4>
    </>
  );
};

export default Review;
