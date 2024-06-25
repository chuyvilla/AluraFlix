// src/components/Header.jsx
import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="logo">ALURAFLIX</div>
      <div className="botones">
      <button className="new-video-button" id='botonHome'>HOME</button>
      <button className="new-video-button" id='botonVideo'>NUEVO VIDEO</button>
      </div>
      
    </header>
  );
}

export default Header;
