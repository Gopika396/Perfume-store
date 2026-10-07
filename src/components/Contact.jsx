import React from "react";
import { Link } from "react-router-dom";

function Contact() {

  const submitForm = (event) => {
    event.preventDefault();

    alert("Thank you for contacting NOIRÉ!");
  };

  return (
    <>
      <section className="page-title">

        <div className="container">

          <p>NOIRÉ</p>

          <h1>TALK TO US</h1>

        </div>

      </section>


      <section className="contact-section">

        <div className="container">

          <div className="row">

            <div
              className="col-lg-5 contact-info"
              data-aos="fade-right"
            >

              <p className="section-label">
                CONTACT
              </p>

              <h2>
                LET'S START
                <br />
                A CONVERSATION.
              </h2>

              <p>
                Have a question about our fragrances?
                We would love to hear from you.
              </p>

              <div className="contact-detail">
                <h5>EMAIL</h5>
                <p>hello@noireperfumes.com</p>
              </div>

              <div className="contact-detail">
                <h5>PHONE</h5>
                <p>+91 98765 43210</p>
              </div>

              <div className="contact-detail">
                <h5>LOCATION</h5>
                <p>Bangalore, India</p>
              </div>

            </div>


            <div
              className="col-lg-7"
              data-aos="fade-left"
            >

              <form
                className="contact-form"
                onSubmit={submitForm}
              >

                <input
                  type="text"
                  placeholder="Your Name"
                  required
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  required
                />

                <input
                  type="text"
                  placeholder="Subject"
                  required
                />

                <textarea
                  rows="7"
                  placeholder="Your Message"
                  required
                ></textarea>

                <button type="submit">
                  SEND MESSAGE
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

function Footer() {
  return (
    <footer className="noire-footer">

      <div className="container">

        <div className="row">

          <div className="col-lg-4">
            <h3>NOIRÉ</h3>

            <p>
              Modern fragrances for unforgettable moments.
            </p>
          </div>

          <div className="col-lg-4 footer-links">

            <h5>QUICK LINKS</h5>

            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/products">Products</Link>
            <Link to="/gallery">Gallery</Link>

          </div>

          <div className="col-lg-4">

            <h5>CONTACT</h5>

            <p>hello@noireperfumes.com</p>
            <p>+91 98765 43210</p>

          </div>

        </div>

        <div className="footer-bottom">
          © 2026 NOIRÉ. All Rights Reserved.
        </div>

      </div>

    </footer>
  );
}

export default Contact;