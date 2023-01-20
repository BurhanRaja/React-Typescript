import React from 'react'
import FilterBoard from '../FilterBoard'
import ProductSection from '../ProductSection'

const ElectronicHome = () => {
  return (
    <div className='flex'>
        <FilterBoard />
        <ProductSection title='Electronic Products' />
    </div>
  )
}

export default ElectronicHome