import React from 'react';

import Search from './Search/Search';


function ImageSearch({ onClick }) {

  return (
    <div>
      <Search onClick={ onClick } />
    </div>
  );
};

export default ImageSearch;