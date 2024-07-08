import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { latestdata } from '../data/lastestProductData'
import ProductCard1 from '../Components/ProductCard1'
import '../Styles/latestprducts.css'

const LatestProductPage = () => {
  return (
    <div className='latestproductPage-container'>
    <div className="product-heading">
    <h3>Our Latest Products</h3>
    <div className="icons">
    <FontAwesomeIcon icon={faAngleLeft}/>
    <FontAwesomeIcon icon={faAngleRight}/>
    </div>
    </div>
    <div className="latestProduct-cards">
    {latestdata.map((item)=>(
      <ProductCard1 key={item.id} item = {item}/>
    ))}
    
    </div>
    
    </div>
  )
}

export default LatestProductPage
