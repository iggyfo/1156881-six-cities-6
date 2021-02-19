import propTypes from "prop-types";


export const offerPropsTypes = {
  previewImage: propTypes.string,
  title: propTypes.string,
  price: propTypes.number,
  type: propTypes.string,
  id: propTypes.number,
  images: propTypes.array,
};

export const hostPropsTypes = {
  id: propTypes.number,
  name: propTypes.string,
  isPro: propTypes.bool,
  avatarUrl: propTypes.string,
};

