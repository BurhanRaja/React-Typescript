import CategorySection from "../components/users/Home/CategorySection";
import ProductsLineup from "../components/users/Home/ProductsLineup";
import Hero from "../components/users/herosection/Hero";
import HeroSlider from "../components/users/herosection/Slider";

const Home = () => {
  return (
    <>
      <HeroSlider autoPlay={true} infinite={true}>
        {/* <DiscountSaleHero /> */}
        <Hero
          fTitle="Fashion"
          lTitle="Collections"
          link="/shop/fashion"
          mainImg="/images/womenfashion.jpg"
          oneImg="/images/glasses.avif"
          twoImg="/images/shoes.webp"
          bgColor="bg-slate-200"
        />
        <Hero
          fTitle="Electronic"
          lTitle="Products"
          link="/shop/electronic"
          mainImg="/images/mobile-image.jpg"
          oneImg="/images/laptops.jpg"
          twoImg="/images/headphones-image.jpg"
          bgColor="bg-orange-300"
        />
        <Hero
          fTitle="Beauty"
          lTitle="Products"
          link="/shop/beauty-products"
          mainImg="/images/beauty-1.jpg"
          oneImg="/images/beauty-2.jpg"
          twoImg="/images/beauty-3.jpg"
          bgColor="bg-blue-200"
        />
        <Hero
          fTitle="Home Decor"
          lTitle="& Furniture"
          link="/shop/home-products"
          mainImg="/images/furniture.jpg"
          oneImg="/images/smart-app.jpg"
          twoImg="/images/home-decor.jpg"
          bgColor="bg-red-300"
        />
      </HeroSlider>
      <ProductsLineup title="Featured Products" />
      <CategorySection />
      <ProductsLineup title="Trending Products" />
    </>
  );
};

export default Home;
