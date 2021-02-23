import propTypes from "prop-types";


export const offerPropsTypes = {
  previewImage: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  type: propTypes.string.isRequired,
  id: propTypes.number.isRequired,
  images: propTypes.array.isRequired,
};

export const hostPropsTypes = {
  id: propTypes.number.isRequired,
  name: propTypes.string.isRequired,
  isPro: propTypes.bool.isRequired,
  avatarUrl: propTypes.string.isRequired,
};

