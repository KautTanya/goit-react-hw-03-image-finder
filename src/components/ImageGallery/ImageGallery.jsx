import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';


export const ImageGallery = ({ data, onClick }) => {
  return (
    <ul>
      {data.map(img => {
        return (
          <ImageGalleryItem
            src={img.webformatURL}
            alt={img.tags}
            largeImageURL={img.largeImageURL}
            key={img.id}
            onClick={onClick}
          />
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  data: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};
