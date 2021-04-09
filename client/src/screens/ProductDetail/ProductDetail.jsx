import { useState, useEffect } from "react";
import "./ProductDetail.css";
import Layout from "../../components/shared/Layout/Layout";
import { getProduct, deleteProduct } from "../../services/products";
import { useHistory, useParams, Link } from "react-router-dom";
import { addToCart } from "../../services/users";

const ProductDetail = (props) => {
  const [product, setProduct] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();
  const history = useHistory();

  // When the id is retrived from params, make axios get request and update product
  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id);
      setProduct(product);
      setLoaded(true);
    };
    fetchProduct();
  }, [id]);

  /* Clicking the delete button triggers this event, which deletes the product 
  from the API and redirects to the products page */
  const deleteProd = async (e) => {
    e.preventDefault();
    await deleteProduct(product._id);
    history.push("/products");
  };
  const toCart = async (e) => {
    e.preventDefault();
    await addToCart(props.user.id, product._id);
    history.push(`/users/${props.user.id}/cart`)
  };

  // If the product takes a long time to load, display this
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
          <div className="product-detail-price">{`${product.price}`}</div>
          <div className="product-detail-description">
            {product.description}
          </div>
          {/* If user props were passed into this screen, display the edit and delete buttons */}
          {props.user && (
            <div className="button-container">
              <button className="add-button" onClick={toCart}>
                add to cart
              </button>
              <div className="edit-delete">
                <button className="edit-button">
                  <Link
                    className="edit-link"
                    to={`/products/${product._id}/edit`}
                  >
                    edit
                  </Link>
                </button>
                <button className="delete-button" onClick={deleteProd}>
                  delete
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetail;
