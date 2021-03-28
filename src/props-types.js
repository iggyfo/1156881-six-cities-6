import propTypes from "prop-types";


export const offerPropsTypes = {
  previewImage: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  type: propTypes.string.isRequired,
  id: propTypes.number.isRequired,
  images: propTypes.array.isRequired,
  rating: propTypes.number.isRequired
};

export const commentPropsTypes = {
  id: propTypes.number.isRequired,
  user: propTypes.shape({
    id: propTypes.number.isRequired,
    isPro: propTypes.bool.isRequired,
    name: propTypes.string.isRequired,
    avatarUrl: propTypes.string.isRequired
  })
};

export const hostPropsTypes = {
  id: propTypes.number.isRequired,
  name: propTypes.string.isRequired,
  isPro: propTypes.bool.isRequired,
  avatarUrl: propTypes.string.isRequired,
};

