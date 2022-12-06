import PropTypes from 'prop-types';
import axios from 'axios';


const KEY = '30064011-1a9313b9a48be265534983023';
const BASIC_URL = `https://pixabay.com/api/`;


export const getImages = async (page, query) => {
  const response = await axios.get(BASIC_URL, {
    params: {
      key: KEY,
      q: `${query}`,
      per_page: 12,
      orientation: 'horizontal',
      page: `${page}`,
    },
  });
  return response.data;
};

getImages.propTypes = {
  page: PropTypes.number.isRequired,
  query: PropTypes.string.isRequired,
};
