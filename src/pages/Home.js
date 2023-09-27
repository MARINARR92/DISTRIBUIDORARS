import About from '../components/About';
import GallerySection from '../components/GallerySection';
import ProductsLine from '../components/ProductsLine';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div className='max-w-[1920px] mx-auto overflow-hidden bg-white'>
 
      <Hero />
      <ProductsLine />    
      <About />
      <GallerySection />   

      
      {/* <div className='h-[4000px]'></div> */}
    </div>
  );
};

export default Home;

