import './Cart.css';
import Layout from '../../components/shared/Layout/Layout'
import { GetCart } from '../../services/users'
import GetCarts from '../../components/GetCarts/GetCarts'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

const Cart = (props) => {
  const [cartItems, setCartItems] = useState([])
  const [toggleFetch, setToggleFetch] = useState([false])
  const { id } = useParams();

  useEffect(() => {
    const fetchCartItems = async() => {
      const cartItems = await GetCart(id)
      setCartItems(cartItems)
    }
    console.log("Is it running?")
    fetchCartItems()
  }, [toggleFetch])

  if (!cartItems) {
    return (
    <>
      <h3>Go Shopping</h3>
    </>
    )
  }

  {}


  const cartItemsJSX = cartItems.map((cartItem, index) => (
    <GetCarts
      _id={cartItem._id}
      // image={cartItem.imgURL}
      name={cartItem.name}
      price={cartItem.price}
      key={index}
      setToggleFetch={setToggleFetch}
      className="cartItem" />
  ))
  return (
    <Layout user={props.user}>
      <h3>Cart</h3>
      <div className="cart-items-container">
        {cartItemsJSX}
      </div>
    </Layout>
  )
}

export default Cart

