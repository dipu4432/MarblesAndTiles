import Banner from "./banner";
import About from "./about";
import Category from "./category";
import Products from "./products";
import Gallery from "./gallery";
import Contact from "./contact";

const Home = () => {
  return (
    <div>

      <section id="home">
        <Banner />
      </section>

      <section id="collection">
        <Category />
      </section>

      <section id="products">
        <Products />
      </section>

      <section id="about">
        <About />
      </section>

      {/* <section id="gallery">
        <Gallery />
      </section> */}

      <section id="contact">
        <Contact />
      </section>

    </div>
  );
};

export default Home;