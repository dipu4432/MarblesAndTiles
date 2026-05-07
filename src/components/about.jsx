import "./about.css";
import aboutImg from "../assets/abbb.jpg";

function About() {
  return (
    <section className="about-section">
      <div className="container">
        <h2 className="section-heading">About Us</h2>
        <div className="row about-row g-5">
          {/* Left Image */}
          <div className="col-lg-4">
            <div className="about-image-wrapper">
              <img src={aboutImg} alt="About Marble" className="about-image" />
            </div>
          </div>

          {/* Middle Content */}
          <div className="col-lg-4">
            <div className="about-content">
              {/* <p className="about-small-title">ABOUT US</p> */}

              <h2 className="about-title">
                Crafting Beauty,
                <br />
                Building Trust.
              </h2>

              <p className="about-description">
                We are a leading supplier of premium quality marble tiles and
                granite. With years of experience, we ensure the best quality
                products for residential and commercial spaces.
              </p>

              <button className="about-btn">READ MORE</button>
            </div>
          </div>

          {/* Right Features */}
          <div className="col-lg-4">
            <div className="features-wrapper">
              <p className="feature-heading">WHY CHOOSE US</p>

              <div className="features-grid">
                <div className="feature-card">
                  <div className="feature-icon"></div>

                  <div>
                    <h5>PREMIUM QUALITY</h5>
                    <p>We provide top quality products.</p>
                  </div>
                </div>

                <div className="feature-card">
                  <div className="feature-icon"></div>

                  <div>
                    <h5>WIDE RANGE</h5>
                    <p>A wide range of designs and collections.</p>
                  </div>
                </div>

                <div className="feature-card">
                  <div className="feature-icon"></div>

                  <div>
                    <h5>BEST PRICE</h5>
                    <p>Competitive prices for all products.</p>
                  </div>
                </div>

                <div className="feature-card">
                  <div className="feature-icon"></div>

                  <div>
                    <h5>FAST DELIVERY</h5>
                    <p>On-time delivery at your doorstep.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
