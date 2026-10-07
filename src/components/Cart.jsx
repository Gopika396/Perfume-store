import React from "react";
import { Link } from "react-router-dom";

import perfume1 from "../assets/images/perfume1.jpg";

function Cart() {

  const removeItem = () => {
    console.log("Creed Aventus removed from cart");
  };

  const checkout = () => {
    alert("Thank you for shopping with NOIRÉ!");
  };

  return (
    <>
      <section className="page-title">
        <div className="container">

          <p>NOIRÉ</p>

          <h1>YOUR CART</h1>

        </div>
      </section>


      <section className="cart-section">

        <div className="container">

          <div
            className="cart-item"
            data-aos="fade-up"
          >

            <div className="cart-image">
              <img
                src={perfume1}
                alt="Creed Aventus"
              />
            </div>

            <div className="cart-details">

              <p>
                INTERNATIONAL • MEN
              </p>

              <h2>
                Creed Aventus
              </h2>

              <h4>
                ₹24,500
              </h4>

              <button
                className="remove-button"
                onClick={removeItem}
              >
                REMOVE
              </button>

            </div>

          </div>


          <div className="cart-total">

            <p>
              SUBTOTAL
            </p>

            <h2>
              ₹24,500
            </h2>

            <button
              className="checkout-button"
              onClick={checkout}
            >
              CHECKOUT
            </button>

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
            <p>+91 74117 87329</p>

          </div>

        </div>

        <div className="footer-bottom">
          © 2026 NOIRÉ. All Rights Reserved.
        </div>

      </div>

    </footer>
  );
}

export default Cart;