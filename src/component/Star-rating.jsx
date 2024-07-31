import PropTypes from "prop-types";

const StarRating = ({ rating }) => {
  const stars = Array.from({ length: rating }, (_, index) => (
    <i key={index} className="fa-solid fa-star text-sm text-[#976d44]"></i>
  ));

  return (
    <span className="flex gap-1 items-center">
      <p>{stars}</p>
      <p className="text-base font-normal text-[#3a3a3a] capitalize">
        ({rating})
      </p>
    </span>
  );
};

StarRating.propTypes = {
  rating: PropTypes.any,
};

export default StarRating;
