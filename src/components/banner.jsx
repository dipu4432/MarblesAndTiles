import "./banner.css";
import { Button, Carousel } from "react-bootstrap";

import heroBg1 from "../assets/b.jpg";
import heroBg2 from "../assets/c.jpg";
import heroBg3 from "../assets/d.jpg";

function Banner() {
  const slides = [
    {
      image: heroBg1,
    },
    {
      image: heroBg2,
    },
    {
      image: heroBg3,
    },
  ];

  return (
    <section className="hero-section">
      <Carousel
        fade
        controls={false}
        indicators={true}
        interval={3000}
        pause={false}
      >
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <div
              className="hero-slide"
              style={{
                background: `url(${slide.image}) center/cover no-repeat`,
              }}
            >
              <div className="hero-overlay"></div>

              <div className="hero-content container">
                <p className="hero-top-text">BEUTY THAT LASTS FOREVER</p>

                <h1 className="hero-title">
                  Premium Marble <br />
                  <span className="ampersand">&</span>
                  <span className="tiles-text"> Tiles</span>
                </h1>

                <p className="hero-subtitle">
                  Explore a wide range of high quality marble,
                  <br />
                  tiles and granite for your dream spaces.
                </p>

                <Button className="explore-btn">EXPLORE COLLECTION →</Button>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}

export default Banner;
