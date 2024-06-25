// src/App.jsx
import React from 'react';
import Header from './Componentes/Header/Header';
import Hero from './Componentes/Hero/Hero';
import Section from './Componentes/Section/Section';

function App() {
  const frontEndCards = [
    { title: 'Cuándo usar let, var y const', description: '...', image: 'image-url-1' },
    { title: '¿Qué es JavaScript?', description: '...', image: 'image-url-2' },
    { title: 'Equipo Front End', description: '...', image: 'image-url-3' },
  ];

  const backEndCards = [
    { title: 'Spring Framework', description: '...', image: 'image-url-4' },
    { title: '¿Qué es SQL y NoSQL?', description: '...', image: 'image-url-5' },
    { title: 'Conoce los ENUM', description: '...', image: 'image-url-6' },
  ];

  const managementCards = [
    { title: '¿Qué son las soft skills?', description: '...', image: 'image-url-7' },
    { title: 'Las 7 soft skills más deseadas', description: '...', image: 'image-url-8' },
    { title: 'Metodologías ágiles', description: '...', image: 'image-url-9' },
  ];

  return (
    <div className="App">
      <Header />
      <Hero />
      <Section title="FRONT END" cards={frontEndCards} />
      <Section title="BACK END" cards={backEndCards} />
      <Section title="INNOVACIÓN Y GESTIÓN" cards={managementCards} />
    </div>
  );
}

export default App;
