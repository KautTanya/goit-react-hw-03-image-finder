import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { getImages } from './API/API';
import { ImageGallery } from './ImageGallery/ImageGallery';

export class App extends Component {
 state = {
  query: '',
  images: [],
  page: 1,
  loading: false,
  total: null,
  totalHits: null,
 }
 updateQuery = value => {
  this.setState({
    query: value,
    page: 1,
    images: [],
  });
  console.log(value);
};

getImg = async () => {

  try {
    if (!this.state.query) {
      console.log(this.state.query);
      return;
    }
    this.setState({ isLoading: true });

    const pictures = await getImages(
      this.state.page, 
      this.state.query);

      const picturesInfo = pictures.hits.map(
        ({ webformatURL, largeImageURL, id, tags }) => ({
          id,
          webformatURL,
          largeImageURL,
          tags,
        })
      );
      
    this.setState(prevState => ({
      images: [...prevState.images, ...picturesInfo],
      isLoading: false,
      total: pictures.total,
      totalHits: pictures.totalHits,
    }));
  } catch (error) {
    this.setState({ error: true, isLoading: false });
    console.log(error);
  }
};
async componentDidUpdate(_, prevState) {
  const prevRequest = prevState.query;
  const nextRequest = this.state.query;
  const prevPage = prevState.page;
  const nextPage = this.state.page;

  if (prevRequest !== nextRequest) {
    // console.log(this.state, 'update')
    this.state.images = [];
    this.state.page = 1;
    this.getImg();
  }
  if (prevPage !== nextPage) {
    this.getImg();
  }
}
loadMore = async () => {
  this.setState(prevState => ({
    page: prevState.page + 1,
  }));
};

toggleModal = evt => {
 console.log('yes');
};
 render(){
  const { isLoading, images } = this.state;
  return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
      <Searchbar updateQuery={this.updateQuery}/>
      {images.length === 0 && !isLoading && (
          <p
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              fontSize: '75px',
              fontWeight: 'bold',
              fontStyle: 'italic',
              color: '#87a9c7',
            }}
          >
            There`re no images yet. Please enter the search category!
          </p>
        )}
         {images.length !== 0 && (
          <>
            <ImageGallery data={images} onClick={this.toggleModal} />
          </>
        )}
        
      </div>
  );
 }
 
}

