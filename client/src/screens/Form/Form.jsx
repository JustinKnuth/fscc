import { useEffect, useState } from "react";
import "./Form.css";
import Layout from "../../components/shared/Layout/Layout";
import {
  createProduct,
  getProduct,
  updateProduct,
} from "../../services/products";
import { useParams, Redirect } from "react-router-dom";

function Form(props) {
  const [isCreated, setCreated] = useState("");
  const [isUpdated, setIsUpdated] = useState(false);
  const [product, setProduct] = useState({
    name: "",
    price: "",
    imgURL: "",
    description: "",
  });

  let { id } = useParams();

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        const productDetail = await getProduct(id);
        setProduct(productDetail);
      };
      fetchProduct();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      const updated = await updateProduct(id, product);
      setIsUpdated(updated);
    } else {
      const created = await createProduct(product);
      setCreated({ created });
    }
  };

  if (isCreated) {
    return <Redirect to="/products" />;
  }

  if (isUpdated) {
    return <Redirect to={`/products/${id}`} />;
  }

  
  return (
    <>
      <Layout user={props.user}>
        <div className="form">
            {id ? <h3 className="form-title">edit product</h3> : <h3 className="form-title">create product</h3>}
          <form onSubmit={handleSubmit} className="form-container">
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              placeholder="name"
              className="name-input"
            />
            <input
              type="text"
              name="price"
              value={product.price}
              onChange={handleChange}
              placeholder="price"
              className="price-input"
            />
            <input
              type="text"
              name="imgURL"
              value={product.imgURL}
              onChange={handleChange}
              placeholder="image url"
              className="img-input"
            />
            <textarea
              
              name="description"
              value={product.description}
              onChange={handleChange}
              placeholder="description"
              className="description-input"
              rows="6"
            />
            <button type="submit" className="sub-button">
              submit
            </button>
          </form>
        </div>
      </Layout>
    </>
  );
}

export default Form;
