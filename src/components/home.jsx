import Banner from './banner';
import About from './about';
import Collection from './collection';
import Products from './products';
import Gallery from './gallery';
import Contact from './contact';

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Collection />
      <Products />
      <Gallery />
      <Contact />
    </div>
  )
}

export default Home