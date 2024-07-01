import React from 'react';

function Reviews() {
  return (
    <section className="reviews" id="reviews">
      <h2 className="heading">Reviews</h2>
      <div className="reviews-container">
        {/* Repeat for each review */}
        <div className="reviews-box">
          <i className='bx bx-user-circle'></i>
          <h3>Emily Che</h3>
          <p>Amazing people, amazing coffee. What more could anyone ask for?</p>
          <a href="#reviews" className="btn">Read More</a>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
