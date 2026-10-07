import React from "react";
import { Link } from "react-router-dom";

import heroImage from "../assets/images/hero.jpg";
import perfume1 from "../assets/images/perfume1.jpg";
import perfume2 from "../assets/images/perfume2.jpg";
import perfume3 from "../assets/images/perfume3.jpg";

function Home() {
  const topProducts = [
    {
      name: "Creed Aventus",
      image: perfume1,
      price: "₹24,500",
      category: "International"
    },
    {
      name: "Jean Paul Gaultier Le Male",
      image: perfume2,
      price: "₹11,500",
      category: "International"
    },
    {
      name: "Armani Code",
      image: perfume3,
      price: "₹10,900",
      category: "International"
    }
  ];

  return (
    <>
      <section className="home-hero">
        <div className="container">
          <div className="row align-items-center">

            <div
              className="col-lg-6"
              data-aos="fade-right"
            >
              <p className="hero-label">
                NOIRÉ PERFUMES
              </p>

              <h1>
                SCENT HAS
                <br />
                NO LIMITS.
              </h1>

              <p className="hero-description">
                Discover iconic fragrances from India and
                around the world, selected for every personality.
              </p>

              <Link
                to="/products"
                className="main-button"
              >
                SHOP COLLECTION
              </Link>
            </div>

            <div
              className="col-lg-6"
              data-aos="fade-left"
            >
              <div className="hero-image-wrapper">
                <img
                  src={heroImage}
                  alt="NOIRÉ Perfume"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="home-top-section">
        <div className="container">

          <div
            className="section-heading"
            data-aos="fade-up"
          >
            <p>OUR FAVORITES</p>
            <h2>TOP PRODUCTS</h2>
          </div>

          <div className="row">

            {topProducts.map((product, index) => (
              <div
                className="col-lg-4 col-md-6 mb-4"
                key={product.name}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="home-product-card">

                  <div className="home-product-image">
                    <img
                      src={product.image}
                      alt={product.name}
                    />
                  </div>

                  <div className="home-product-info">
                    <span>{product.category}</span>

                    <h3>{product.name}</h3>

                    <strong>{product.price}</strong>
                  </div>

                </div>
              </div>
            ))}

          </div>

          <div className="text-center mt-4">
            <Link
              to="/products"
              className="outline-button"
            >
              VIEW ALL 15 PRODUCTS
            </Link>
          </div>

        </div>
      </section>

      <section className="home-story">
        <div className="container text-center">

          <p data-aos="fade-up">
            MORE THAN A FRAGRANCE
          </p>

          <h2 data-aos="fade-up">
            YOUR SCENT.
            <br />
            YOUR IDENTITY.
          </h2>

          <Link
            to="/about"
            className="dark-button"
          >
            OUR STORY
          </Link>

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

export default Home;