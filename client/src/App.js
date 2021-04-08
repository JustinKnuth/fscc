import { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css'
import { verifyUser } from './services/users';
import Products from "./screens/Products/Products"
import SignIn from "./screens/SignIn/SignIn"
import SignUp from "./screens/SignUp/SignUp";
import SignOut from "./screens/SignOut/SignOut";
import Home from './screens/Home/Home';
import ProductDetail from "./screens/ProductDetail/ProductDetail"
import Form from "./screens/Form/Form";
import Cart from "./screens/Cart/Cart"

function App() {
  const [user, setUser] = useState(null)
  
  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser()
      user ? setUser(user) : setUser(null)
    }
    fetchUser()
  }, [])

  const clearUser = () => {
    localStorage.removeItem('token')
    setUser(null)
  }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home user={user}/>
        </Route>
        <Route path="/sign-up">
          <SignUp setUser={setUser}/>
        </Route>
        <Route path="/sign-in">
          <SignIn setUser={setUser}/>
        </Route>
        <Route path="/sign-out">
          <SignOut clearUser={clearUser} setUser={setUser}/>
        </Route>
        <Route exact path="/products">
          <Products user={user}/>
        </Route>
        <Route path="/add-product">
          <Form user={user}/>
        </Route>
        <Route exact path="/products/:id/edit">
          <Form user={user}/>
        </Route>
        <Route exact path="/products/:id">
          <ProductDetail user={user}/>
        </Route>
        <Route exact path="/users/:id/cart">
          <Cart user={user}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
