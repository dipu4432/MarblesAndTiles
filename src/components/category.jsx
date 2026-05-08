import "./category.css";

import c1 from "../assets/c1.jpg";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.jpg";
import c4 from "../assets/c4.png";

import {
  FaBorderAll,
  FaThLarge,
  FaGem,
  FaMountain,
  FaArrowRight,
} from "react-icons/fa";

function Category() {
  const categories = [
    {
      image: c1,
      title: "FLOOR TILES",
      icon: <FaBorderAll />,
    },
    {
      image: c2,
      title: "WALL TILES",
      icon: <FaThLarge />,
    },
    {
      image: c3,
      title: "MARBLE",
      icon: <FaGem />,
    },
    {
      image: c4,
      title: "GRANITE",
      icon: <FaMountain />,
    },
  ];

  return (
    <section className="category-section">
      <div className="container">
        {/* Heading */}
        <h2 className="section-heading">Shop By Category</h2>

        {/* Categories */}
        <div className="category-grid">
          {categories.map((item, index) => (
            <div className="category-card" key={index}>
              {/* Image */}
              <div className="category-image-wrapper">
                <img
                  src={item.image}
                  alt={item.title}
                  className="category-image"
                />
              </div>

              {/* Content */}
              <div className="category-content">
                <div className="category-icon">{item.icon}</div>

                <h4>{item.title}</h4>

                <button className="explore-btn">
                  EXPLORE
                  <FaArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Category;
