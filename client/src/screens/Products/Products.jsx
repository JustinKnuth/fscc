import { useEffect, useState } from "react";
import "./Products.css";
import Product from "../../components/Product/Product";
import { getProducts } from "../../services/products";
import Layout from "../../components/shared/Layout/Layout";

const Products = (props) => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      console.log(products);
      setAllProducts(products);
    };
    fetchProducts();
  }, []);

  if (!allProducts) {
    return;
    <Layout>
      <h3>Hello</h3>
    </Layout>;
  }

  const productsJSX = allProducts.map((product, index) => (
    <Product
      _id={product._id}
      name={product.name}
      imgURL={product.imgURL}
      key={index}
      className="product"
    />
  ));

  return (
    <Layout user={props.user}>
      <div className="products-screen-container">
        <h3 className="products-title">Products</h3>
        <div className="products-container">{productsJSX}</div>
      </div>
    </Layout>
  );
};

export default Products;
