// src/components/Card.jsx
import React from 'react';

function Card({ title, description, image }) {
  return (
    <div className="card">
      <img src="/src/assets/image 7.png" alt="" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Card;
