import React from 'react';

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2 className="heading">Contact<span>Us</span></h2>
      <form action="connect.php" method="post">
        <div className="input-box">
          <input type="text" placeholder="Full Name"/>
          <input type="email" placeholder="Email"/>
        </div>
        <div className="input-box">
          <input type="number" placeholder="Phone Number"/>
          <input type="text" placeholder="Subject"/>
        </div>
        <textarea cols="30" rows="10" placeholder="Your Message"></textarea>
        <input type="submit" value="Send Message" className="btn"/>
      </form>
    </section>
  );
}

export default Contact;
