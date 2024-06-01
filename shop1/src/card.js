
import React from 'react';

function Card({ shoes, image }) {
  return (
    <div className="col-md-4">
      <img src={image} width="80%"/>
      <h4>{shoes.title}</h4>
      <p>{shoes.price}</p>
    </div>
  );
}

export default Card;
