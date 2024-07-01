
import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Coffee from './components/Coffee';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles.css';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Coffee />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

