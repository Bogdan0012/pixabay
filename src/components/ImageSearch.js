import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { setImages } from '../Slices/ImageSlice';


function ImageSearch({images, setImages}) {
  const [searchPrompt, setSearchPrompt] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://localhost:7125/api/PixabayApi/GetPictures?images=${encodeURIComponent(searchPrompt)}`
      );

      const hits = response.data;
      setImages(hits);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  return (
    <div className='search'>
      <input className='searchBar'
        type="text"
        value={searchPrompt}
        onChange={(e) => setSearchPrompt(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <div className='resultImages'>
        {images.map((image, index) => (
          <img key={index} src={image.largeImageURL} alt='' />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  images: state.images,
});

const mapDispatchToProps = (dispatch) => ({
  setImages: (images) => dispatch(setImages(images)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageSearch);