import HeroSlider from '../herosection/Slider';
import CategorySection from './CategorySection';
import ProductSection from '../ProductSection';
import Hero from "../herosection/Hero";
import DiscountSaleHero from "../herosection/DiscountSaleHero";

const Home = () => {
  return (
    <>
        <HeroSlider autoPlay={true} infinite={true}>
        <DiscountSaleHero />
        <Hero
          fTitle="Fashion"
          lTitle="Collections"
          link="#"
          mainImg="/images/womenfashion.jpg"
          twoImg={[
            {
              id: "1",
              name: "/images/glasses.avif",
            },
            {
              id: "2",
              name: "/images/shoes.webp"
            },
          ]}
          bgColor="bg-slate-200"
        />
        <Hero
          fTitle="Electronic"
          lTitle="Products"
          link="#"
          mainImg="/images/mobile-image.jpg"
          twoImg={[
            {
              id: "1",
              name: "/images/laptops.jpg",
            },
            {
              id: "2",
              name: "/images/headphones-image.jpg"
            },
          ]}
          bgColor="bg-orange-300"
        />
          </HeroSlider>
        <ProductSection title='Featured Products' />
        <CategorySection />
        <ProductSection title='Trending Products' />
    </>   
  )
}

export default Home