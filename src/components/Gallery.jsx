import React from "react";
import { Link } from "react-router-dom";

import perfume1 from "../assets/images/perfume1.jpg";
import perfume2 from "../assets/images/perfume2.jpg";
import perfume3 from "../assets/images/perfume3.jpg";
import perfume4 from "../assets/images/perfume4.jpg";
import perfume5 from "../assets/images/perfume5.jpg";
import perfume6 from "../assets/images/perfume6.jpg";
import perfume7 from "../assets/images/perfume7.jpg";
import perfume8 from "../assets/images/perfume8.jpg";
import perfume9 from "../assets/images/perfume9.jpg";
import perfume10 from "../assets/images/perfume10.jpg";
import perfume11 from "../assets/images/perfume11.jpg";
import perfume12 from "../assets/images/perfume12.jpg";
import perfume13 from "../assets/images/perfume13.jpg";
import perfume14 from "../assets/images/perfume14.jpg";
import perfume15 from "../assets/images/perfume15.jpg";

const galleryProducts = [
  ["Creed Aventus", perfume1],
  ["Jean Paul Gaultier Le Male", perfume2],
  ["Armani Code", perfume3],
  ["Carolina Herrera Good Girl", perfume4],
  ["Paco Rabanne 1 Million", perfume5],
  ["Burberry Hero", perfume6],
  ["Titan Skinn Raw", perfume7],
  ["Titan Skinn Steele", perfume8],
  ["Park Avenue Voyage", perfume9],
  ["The Man Company Blanc", perfume10],
  ["Wild Stone Ultra Sensual", perfume11],
  ["Engage L'amante", perfume12],
  ["Ajmal Wisal Dhahab", perfume13],
  ["Bella Vita CEO Man", perfume14],
  ["Fogg Impressio", perfume15]
];

function Gallery() {
  return (
    <>
      <section className="page-title">
        <div className="container">

          <p>NOIRÉ VISUALS</p>

          <h1>GALLERY</h1>

        </div>
      </section>


      <section className="gallery-section">

        <div className="container">

          <div
            className="gallery-intro"
            data-aos="fade-up"
          >

            <p>THE WORLD OF NOIRÉ</p>

            <h2>
              SCENTS IN FRAME.
            </h2>

            <span>
              Explore our complete fragrance collection.
            </span>

          </div>


          <div className="gallery-grid">

            {galleryProducts.map((product, index) => (

              <div
                className="gallery-card"
                key={product[0]}
                data-aos="fade-up"
                data-aos-delay={(index % 5) * 60}
              >

                <div className="gallery-card-image">

                  <img
                    src={product[1]}
                    alt={product[0]}
                  />

                </div>

                <div className="gallery-card-info">

                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3>
                    {product[0]}
                  </h3>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      <section className="gallery-statement">

        <div className="container text-center">

          <p>
            15 FRAGRANCES.
          </p>

          <h2>
            ONE COLLECTION.
          </h2>

          <Link
            to="/products"
            className="dark-button"
          >
            SHOP PRODUCTS
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

export default Gallery;