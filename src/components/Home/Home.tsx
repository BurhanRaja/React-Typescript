import React from 'react'
import HeroSlider from '../herosection/Slider'
import Layout from './Layout'
import ProductSection from './ProductSection'

const Home = () => {
  return (
    <Layout>
        <HeroSlider />
        <ProductSection />
    </Layout>   
  )
}

export default Home