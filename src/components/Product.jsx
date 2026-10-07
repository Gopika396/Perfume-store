import React, { useState } from "react";
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

const products = [
  {
    id: 1,
    name: "Creed Aventus",
    price: "₹24,500",
    category: "International",
    type: "Men",
    rating: "4.9",
    image: perfume1
  },
  {
    id: 2,
    name: "Jean Paul Gaultier Le Male",
    price: "₹11,500",
    category: "International",
    type: "Men",
    rating: "4.8",
    image: perfume2
  },
  {
    id: 3,
    name: "Armani Code",
    price: "₹10,900",
    category: "International",
    type: "Men",
    rating: "4.8",
    image: perfume3
  },
  {
    id: 4,
    name: "Carolina Herrera Good Girl",
    price: "₹9,800",
    category: "International",
    type: "Women",
    rating: "4.9",
    image: perfume4
  },
  {
    id: 5,
    name: "Paco Rabanne 1 Million",
    price: "₹8,900",
    category: "International",
    type: "Men",
    rating: "4.7",
    image: perfume5
  },
  {
    id: 6,
    name: "Burberry Hero",
    price: "₹9,500",
    category: "International",
    type: "Men",
    rating: "4.7",
    image: perfume6
  },
  {
    id: 7,
    name: "Titan Skinn Raw",
    price: "₹2,195",
    category: "Indian",
    type: "Men",
    rating: "4.6",
    image: perfume7
  },
  {
    id: 8,
    name: "Titan Skinn Steele",
    price: "₹2,195",
    category: "Indian",
    type: "Men",
    rating: "4.5",
    image: perfume8
  },
  {
    id: 9,
    name: "Park Avenue Voyage",
    price: "₹699",
    category: "Indian",
    type: "Men",
    rating: "4.4",
    image: perfume9
  },
  {
    id: 10,
    name: "The Man Company Blanc",
    price: "₹1,199",
    category: "Indian",
    type: "Men",
    rating: "4.5",
    image: perfume10
  },
  {
    id: 11,
    name: "Wild Stone Ultra Sensual",
    price: "₹599",
    category: "Indian",
    type: "Men",
    rating: "4.3",
    image: perfume11
  },
  {
    id: 12,
    name: "Engage L'amante",
    price: "₹649",
    category: "Indian",
    type: "Women",
    rating: "4.4",
    image: perfume12
  },
  {
    id: 13,
    name: "Ajmal Wisal Dhahab",
    price: "₹2,499",
    category: "International",
    type: "Unisex",
    rating: "4.6",
    image: perfume13
  },
  {
    id: 14,
    name: "Bella Vita CEO Man",
    price: "₹999",
    category: "Indian",
    type: "Men",
    rating: "4.4",
    image: perfume14
  },
  {
    id: 15,
    name: "Fogg Impressio",
    price: "₹699",
    category: "Indian",
    type: "Men",
    rating: "4.2",
    image: perfume15
  }
];

function Product() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All Products");

  const filteredProducts = products.filter((product) => {

    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    let matchesFilter = true;

    if (filter === "Indian") {
      matchesFilter = product.category === "Indian";
    }

    if (filter === "International") {
      matchesFilter = product.category === "International";
    }

    if (filter === "Men") {
      matchesFilter = product.type === "Men";
    }

    if (filter === "Women") {
      matchesFilter = product.type === "Women";
    }

    if (filter === "Top Products") {
      matchesFilter = product.id <= 3;
    }

    return matchesSearch && matchesFilter;
  });

  return (
    <>
      <section className="products-page">

        <div className="container-fluid products-container">

          <div
            className="products-header"
            data-aos="fade-down"
          >

            <div>
              <p className="products-small-title">
                NOIRÉ COLLECTION
              </p>

              <h1>Products</h1>
            </div>

            <div className="product-actions">

              <div className="search-box">
                <span>⌕</span>

                <input
                  type="text"
                  placeholder="Search product..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>

              <button
                className="new-product-button"
                onClick={() => console.log("Add New Product")}
              >
                <span>+</span>
                Add New Product
              </button>

            </div>

          </div>


          <div
            className="product-filters"
            data-aos="fade-up"
          >

            {[
              "All Products",
              "Top Products",
              "Indian",
              "International",
              "Men",
              "Women"
            ].map((item) => (

              <button
                key={item}
                className={
                  filter === item
                    ? "filter-button active"
                    : "filter-button"
                }
                onClick={() => setFilter(item)}
              >
                {item}
              </button>

            ))}

          </div>


          <div className="products-count">
            Showing {filteredProducts.length} products
          </div>


          <div className="product-grid">

            {filteredProducts.map((product, index) => (

              <div
                className="shop-product-card"
                key={product.id}
                data-aos="fade-up"
                data-aos-delay={(index % 5) * 50}
              >

                <div className="shop-product-image">

                  {product.id <= 3 && (
                    <div className="top-badge">
                      TOP
                    </div>
                  )}

                  <img
                    src={product.image}
                    alt={product.name}
                  />

                </div>


                <div className="shop-product-details">

                  <div className="product-category">
                    {product.category} • {product.type}
                  </div>

                  <h3>
                    {product.name}
                  </h3>

                  <div className="product-price">
                    {product.price}
                  </div>

                  <div className="product-bottom">

                    <span className="rating">
                      ★ {product.rating}
                    </span>

                    <Link
                      to="/cart"
                      className="small-cart-button"
                    >
                      Add
                    </Link>

                  </div>

                </div>

              </div>

            ))}

          </div>


          {filteredProducts.length === 0 && (
            <div className="no-products">
              No products found.
            </div>
          )}

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

export default Product;