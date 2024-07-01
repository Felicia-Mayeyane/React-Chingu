import React from 'react';

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Welcome to</h3>
        <h1>Chingu<span>&Coffee</span></h1>
        <p>At Chingu & Coffee, we believe that coffee is more than just a beverage—it's a catalyst for connection...</p>
        <a href="#home" className="btn">Order Now</a>
      </div>
    </section>
  );
}

export default Home;
