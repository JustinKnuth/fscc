import { useEffect, useState } from "react"
import "./Form.css"
import Layout from "../../components/shared/Layout/Layout"
import { createProduct, getProduct, updateProduct } from "../../services/products"
import { useParams, Redirect } from "react-router-dom"

function Form() {
  const [isCreated, setCreated] = useState("")
  const [isUpdated, setIsUpdated] = useState(false)
  const [product, setProduct] = useState({
    name: "",
    price: "",
    imgURL: "",
    description: "",
  })
  
  let { id } = useParams()
  // console.log(id)

  useEffect(() => {
    const fetchProduct = async () => {
      const productDetail = await getProduct(id)
      setProduct(productDetail)
    }
    fetchProduct()
  }, [id]) 

  const handleChange = (e) => {
    const { name, value } = e.target
    setProduct({
      ...product,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (id) {
      const updated = await updateProduct(id, product)
      setIsUpdated(updated)
    } else {
      const created = await createProduct(product)
      setCreated({ created })
    }
  }

  if (isCreated) {
    return <Redirect to={`/products/${id}`}/>
  }

  if (isUpdated) {
    return <Redirect to={`/products/${id}`}/>
  }

  return (
    <>
      <Layout>
        <h3>Create Product</h3>
        <form onSubmit={handleSubmit} className="form-container">
          <input type="text" name="name" value={product.name} onChange={handleChange} placeholder="name" className="name-input" />
          <input type="text" name="price" value={product.price} onChange={handleChange} placeholder="price" className="price-input" />
          <input type="text" name="imgURL" value={product.imgURL} onChange={handleChange} placeholder="image URL" className="img-input" />
          <textarea name="description" value={product.description} onChange={handleChange} placeholder="description" className="name-input" rows="6" />
          <button type="submit" className="sub-button">submit</button>
        </form>
      </Layout>
    </>
  )
}

export default Form;