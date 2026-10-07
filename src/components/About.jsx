import React from "react";
import { Link } from "react-router-dom";

import perfume4 from "../assets/images/perfume4.jpg";

function About() {
  return (
    <>
      <section className="page-title">
        <div className="container">

          <p>NOIRÉ</p>

          <h1>THE STORY</h1>

        </div>
      </section>


      <section className="about-section">

        <div className="container">

          <div className="row align-items-center">

            <div
              className="col-lg-6"
              data-aos="fade-right"
            >

              <div className="about-image-box">

                <img
                  src={perfume4}
                  alt="Carolina Herrera Good Girl"
                />

              </div>

            </div>


            <div
              className="col-lg-6 about-content"
              data-aos="fade-left"
            >

              <p className="section-label">
                OUR PHILOSOPHY
              </p>

              <h2>
                BORN FROM
                <br />
                CONTRAST.
              </h2>

              <p>
                NOIRÉ brings together iconic fragrances
                from India and the international fragrance world.
              </p>

              <p>
                We believe fragrance is more than something
                you wear. It becomes part of your identity,
                your memories and your presence.
              </p>

              <p>
                From everyday Indian favorites to luxury
                international fragrances, our collection
                celebrates different personalities.
              </p>

            </div>

          </div>


          <div className="row values-row">

            <div
              className="col-md-4"
              data-aos="fade-up"
            >
              <h3>01</h3>
              <h4>ICONIC</h4>

              <p>
                Recognizable fragrances with unforgettable character.
              </p>
            </div>

            <div
              className="col-md-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3>02</h3>
              <h4>DIVERSE</h4>

              <p>
                Indian and international fragrances in one collection.
              </p>
            </div>

            <div
              className="col-md-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3>03</h3>
              <h4>PERSONAL</h4>

              <p>
                Find a scent that feels uniquely yours.
              </p>
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
            <Link to="/products">Products</Link>
            <Link to="/gallery">Gallery</Link>
            <Link to="/contact">Contact</Link>
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

export default About;