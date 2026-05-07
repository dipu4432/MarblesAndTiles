import "./contact.css";
import contactImg from "../assets/abb.jpg";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact-section">
      <div className="container">
        <h2 className="section-heading">Get In Touch</h2>
        <div className="row g-4 align-items-center">
          {/* Left Image */}
          <div className="col-lg-4">
            <div className="contact-image-wrapper">
              <img
                src={contactImg}
                alt="Contact Marble"
                className="contact-image"
              />
            </div>
          </div>

          {/* Middle Content */}
          <div className="col-lg-3">
            <div className="contact-content">
              {/* <p className="contact-small-title">
                GET IN TOUCH
              </p> */}

              <h2 className="contact-title">
                We'd love to hear
                <br />
                from you!
              </h2>

              <p className="contact-description">
                Send us your query and our team will get back to you soon.
              </p>

              <div className="contact-info">
                <div className="info-item">
                  <FaPhoneAlt className="info-icon" />
                  <span>9892680932</span>
                </div>

                <div className="info-item">
                  <FaEnvelope className="info-icon" />
                  <span>info@marble&tiles.com</span>
                </div>

                <div className="info-item">
                  <FaMapMarkerAlt className="info-icon" />
                  <span>
                    NVC/28, Tifra, Bilaspur,
                    <br />
                    Chhattisgarh 495001
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="col-lg-5">
            <div className="contact-form-wrapper">
              <div className="row g-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="contact-input"
                  />
                </div>

                <div className="col-md-6">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="contact-input"
                  />
                </div>

                <div className="col-12">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="contact-input"
                  />
                </div>

                <div className="col-12">
                  <textarea
                    rows="5"
                    placeholder="Your Message"
                    className="contact-input contact-textarea"
                  ></textarea>
                </div>

                <div className="col-12">
                  <button className="contact-btn">SEND INQUIRY</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
