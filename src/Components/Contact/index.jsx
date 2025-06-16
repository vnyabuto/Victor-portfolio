import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent default reload
    setFormSubmitted(true); // show contact options
  };

  return (
    <section id="contact" data-aos="fade-zoom-in">
      <div className="wrapper">
        <div className="contact-form" data-aos="fade-left">
          <div className="top">
            <h1 className="title">
              <span className="gradient-text">Join forces with me!</span>
            </h1>
            <p className="muted">
              I build with precision and passion, creating software projects and predictive models that stand out. It's as straightforward as that!
            </p>
          </div>

          {!formSubmitted ? (
            <form className="middle" onSubmit={handleSubmit}>
              <div className="flex-row">
                <input type="text" placeholder="First name" name="firstname" className="control" required />
                <input type="text" placeholder="Last name" name="lastname" className="control" required />
              </div>
              <div className="flex-row">
                <input type="email" placeholder="Email address" name="email" className="control" required />
                <input type="tel" placeholder="Phone number" name="phone" className="control" />
              </div>
              <textarea name="message" cols={30} rows={10} placeholder="Message" className="control" required></textarea>

              <div className="flex-center bottom">
                <button type="submit" className="btn primary">Send Now</button>
              </div>
            </form>
          ) : (
            <div className="flex-center bottom contact-options">
              <p className="muted">Choose your preferred method to contact me:</p>
              <a
                href="https://wa.me/254704076311"
                target="_blank"
                rel="noopener noreferrer"
                className="btn primary"
                style={{ margin: '10px' }}
              >
                WhatsApp
              </a>
              <a
                href="mailto:vnyabuto00@gmail.com"
                className="btn secondary"
                style={{ margin: '10px' }}
              >
                Email
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
