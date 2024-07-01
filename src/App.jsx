
import React from 'react';
import Header from './components/Header/Header';
import About from './components/About';
import Contact from './components/Contact';
import ImageOne from './components/ImageOne';
import ImageTwo from './components/ImageTwo';
import ImageThree from './components/ImageThree';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Contact />
      <div className="gallery">
        <ImageOne />
        <ImageTwo />
        <ImageThree />
      </div>
    </div>
  );
};

export default App;
