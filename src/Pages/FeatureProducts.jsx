import React from 'react'
import { featuredata } from '../data/featuredproduct'
// import ProductCard2 from '../Components/ProductCard2'
import FeaProductCard from '../Components/FeaProductCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import '../Styles/featureproducts.css'

const FeatureProducts = () => {
  return (
    <div className='featuredproducts-container'>
    <div className="product-heading">
    <h3>Our Featured Products</h3>
    <div className="icons">
    <FontAwesomeIcon icon={faAngleLeft}/>
    <FontAwesomeIcon icon={faAngleRight}/>
    </div>
    </div>
    <div className="featuredcards">
    {featuredata.map((item, i)=>(
      <FeaProductCard key={i} {...item}/>
    ))}
    </div>

      
    </div>
  )
}

export default FeatureProducts
