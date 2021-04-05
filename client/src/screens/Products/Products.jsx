import { useEffect, useState } from "react"
import "./Products.css"
import Product from "../../components/Product/Product"
import { getProducts } from "../../services/products"


const Products = () => {
  const [allProducts, setAllProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts()
      console.log(products)
      setAllProducts(products)
    }
    fetchProducts()
  }, [])


  if (!allProducts) {
    return
    
      <h3>Hello</h3>
    
  }

  const productsJSX = allProducts.map((product, index) =>
    <Product _id={product._id} name={product.name} imgURL={product.imgURL} key={index} />)

  return (
    <div className="products">
      <h3>Products</h3>
      <div>{productsJSX}</div>
    </div>
  )
}


export default Products