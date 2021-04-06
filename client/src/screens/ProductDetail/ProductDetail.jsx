import { useState, useEffect } from "react";
import "./ProductDetail.css";
import Layout from "../../components/shared/Layout/Layout";
import { getProduct, deleteProduct } from "../../services/products";
import { useHistory, useParams, Link } from "react-router-dom";

const ProductDetail = (props) => {
  const [product, setProduct] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id);
      setProduct(product);
      setLoaded(true);
    };
    fetchProduct();
  }, [id]);

  const handleSub = async (e) => {
    e.preventDefault();
    await deleteProduct(product._id);
    history.push("/products");
  };

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  return (
    <Layout user={props.user}>
      <div className="product-detail">
        <img
          className="product-detail-image"
          src={product.imgURL}
          alt={product.name}
        />
        <div className="product-detail-text">
          <div className="product-detail-name">{product.name}</div>
          <div className="product-detail-price">{`$${product.price}`}</div>
          <div className="product-detail-description">{product.description}</div>
          {props.user && (
            <div className="button-container">
              <button className="edit-button">
                <Link
                  className="edit-link"
                  to={`/products/${product._id}/edit`}
                >
                  edit
                </Link>
              </button>
              <button className="delete-button" onClick={handleSub}>
                delete
              </button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail; 
