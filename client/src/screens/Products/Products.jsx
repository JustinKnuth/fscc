import { useEffect, useState } from "react";
import "./Products.css";
import Product from "../../components/Product/Product";
import Search from "../../components/Search/Search";
import { getProducts } from "../../services/products";
import Layout from "../../components/shared/Layout/Layout";

const Products = (props) => {
  const [allProducts, setAllProducts] = useState([]);
  const [queriedProducts, setQueriedProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setAllProducts(products);
      setQueriedProducts(products);
    };
    fetchProducts();
  }, []);

  const handleSearch = (event) => {
    const newQueriedProducts = allProducts.filter((product) =>
      product.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setQueriedProducts(newQueriedProducts);
  };

  if (!allProducts) {
    return (
    <>
      <h3>Hello</h3>
    </>
    )
  }

  const productsJSX = queriedProducts.map((product, index) => (
    <Product
      _id={product._id}
      name={product.name}
      imgURL={product.imgURL}
      key={index}
      className="product"
    />
  ));

  const handleSubmit = (event) => event.preventDefault();

  return (
    <Layout user={props.user}>
      <div className="products-screen-container">
        <div className="header">
          <h3 className="products-title">Products</h3>
          <Search onSubmit={handleSubmit} onChange={handleSearch} />
        </div>
        <div className="products-container">{productsJSX}</div>
      </div>
    </Layout>
  );
};

export default Products;
