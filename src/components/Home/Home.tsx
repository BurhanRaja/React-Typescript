import React from 'react'
import HeroSlider from '../herosection/Slider'
import CategorySection from './CategorySection'
import Layout from './Layout'
import ProductSection from './ProductSection'

const Home = () => {
  return (
    <Layout>
        <HeroSlider />
        <ProductSection title='Featured Products' />
        <CategorySection />
        <ProductSection title='Trending Products' />
    </Layout>   
  )
}

export default Home