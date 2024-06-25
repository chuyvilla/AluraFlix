// src/components/Section.jsx
import React from 'react';
import Card from '../Card/Card';

function Section({ title, cards }) {
  return (
    <section className="section">
      <h2>{title}</h2>
      <div className="card-container">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </section>
  );
}

export default Section;
