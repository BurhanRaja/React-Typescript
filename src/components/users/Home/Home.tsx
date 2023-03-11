import HeroSlider from '../herosection/Slider';
import CategorySection from './CategorySection';
import ProductSection from '../ProductSection';
import Hero from "../herosection/Hero";
import DiscountSaleHero from "../herosection/DiscountSaleHero";

const Home = () => {
  return (
    <>
        <HeroSlider autoPlay={true} infinite={true}>
        {/* <DiscountSaleHero /> */}
        <Hero
          fTitle="Fashion"
          lTitle="Collections"
          link="#"
          mainImg="/images/womenfashion.jpg"
          oneImg="/images/glasses.avif"
          twoImg="/images/shoes.webp"
          bgColor="bg-slate-200"
        />
        <Hero
          fTitle="Electronic"
          lTitle="Products"
          link="#"
          mainImg="/images/mobile-image.jpg"
          oneImg="/images/laptops.jpg"
          twoImg="/images/headphones-image.jpg"
          bgColor="bg-orange-300"
        />
        <Hero 
        fTitle='Beauty'
        lTitle='Products'
        link='#'
        mainImg='/images/beauty-1.jpg'
        oneImg='/images/beauty-2.jpg'
        twoImg='/images/beauty-3.jpg'
        bgColor='bg-blue-200'
        />
        <Hero 
        fTitle='Home Decor'
        lTitle='& Furniture'
        link='#'
        mainImg='/images/furniture.jpg'
        oneImg='/images/smart-app.jpg'
        twoImg='/images/home-decor.jpg'
        bgColor='bg-red-300'
        />
          </HeroSlider>
        <ProductSection title='Featured Products' />
        <CategorySection />
        <ProductSection title='Trending Products' />
    </>   
  )
}

export default Home