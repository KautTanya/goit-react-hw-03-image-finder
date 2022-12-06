import PropTypes from 'prop-types';
export const ImageGalleryItem = ({src, alt, onClick, largeImageURL }) => {
return(
  <li>
  <img src={src} alt={alt} onClick={onClick} data-src={largeImageURL}/>
</li>
)
}

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};