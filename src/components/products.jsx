import "./products.css";
import { useState } from "react";
import { FaShoppingCart, FaArrowLeft, FaArrowRight } from "react-icons/fa";

import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p4.jpg";
import p4 from "../assets/p1.jpg";
import p5 from "../assets/p2.jpg";
import p6 from "../assets/p3.jpg";

function Products() {
  const products = [
    {
      image: p1,
      title: "Italian Statuario Marble",
      price: "120",
    },
    {
      image: p2,
      title: "Vitrified Tiles",
      price: "65",
    },
    {
      image: p3,
      title: "Ceramic Tiles",
      price: "45",
    },
    {
      image: p4,
      title: "Premium Beige Marble",
      price: "150",
    },
    {
      image: p5,
      title: "Luxury Granite",
      price: "95",
    },
    {
      image: p6,
      title: "Modern Floor Tiles",
      price: "80",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    if (startIndex < products.length - 4) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <section className="products-section">
      <div className="container">
        {/* Heading */}
        <h2 className="section-heading">Featured Products</h2>

        {/* Slider Buttons */}
        <div className="slider-buttons">
          <button onClick={prevSlide} className="arrow-btn">
            <FaArrowLeft />
          </button>

          <button onClick={nextSlide} className="arrow-btn">
            <FaArrowRight />
          </button>
        </div>

        {/* Products */}
        <div className="products-grid">
          {products.slice(startIndex, startIndex + 4).map((product, index) => (
            <div className="product-card" key={index}>
              <div className="product-image-wrapper">
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image"
                />
              </div>

              <div className="product-content">
                <h4>{product.title}</h4>

                <p>₹ {product.price}/sq.ft</p>

                <div className="product-bottom">
                  <button className="details-btn">VIEW DETAILS</button>

                  <button className="cart-btn">
                    <FaShoppingCart />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;
