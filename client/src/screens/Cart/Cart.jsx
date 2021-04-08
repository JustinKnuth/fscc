import './Cart.css';
import Layout from '../../components/shared/Layout/Layout'

const Cart = (props) => {
  console.log(props.user);
  return (
    <Layout user={props.user}>
      <h3>Cart</h3>
      
    </Layout>
  )
}

export default Cart