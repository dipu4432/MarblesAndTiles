import Banner from './banner';
import About from './about';
import Category from './category';
import Products from './products';
import Gallery from './gallery';
import Contact from './contact';

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <Products />
      <About />
      {/* <Gallery /> */}
      <Contact />
    </div>
  )
}

export default Home