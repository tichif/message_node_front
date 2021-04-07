import React from 'react';

import './Image.css';

const image = (props) => (
  <div
    className='image'
    style={{
      backgroundImage: `url('http://localhost:5000/${props.imageUrl}')`,
      backgroundSize: props.contain ? 'contain' : 'cover',
      backgroundPosition: props.left ? 'left' : 'center',
    }}
  />
);

export default image;
