import React from 'react';

function Coffee() {
  return (
    <section className="coffee" id="coffee">
      <h2 className="heading">Coffees</h2>
      <div className="coffee-container">
        {/* Repeat for each coffee item */}
        <div className="coffee-box">
          <img src="images/cuppaCoffe_black-background.png" alt=""/>
          <div className="coffee-info">
            <h4>Seoul Sunrise Blend</h4>
            <p>Medium-roasted Arabica beans sourced from the lush hillsides of South Korea.</p>
            <a href="#"><i className='bx bxs-coffee'></i></a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Coffee;
