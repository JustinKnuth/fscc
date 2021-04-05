import React from 'react'
import "./Product.css"
import { Link } from "react-router-dom"

const Product = (props) => {
  return (
    <>
      <Link className="product" to={`/products/${props._id}`}>
        <img className="product-image" src={props.imgURL} alt={props.name} />
        <h3 className="product-name">{props.name}</h3>
  </Link>
  </>
  )
}

export default Product