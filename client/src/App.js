import { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css'
import { verifyUser } from './services/users';
import Products from "./screens/Products/Products"
import SignIn from "./screens/SignIn/SignIn"
import SignUp from "./screens/SignUp/SignUp";
import Home from './screens/Home/Home';
import ProductDetail from "./screens/ProductDetail/ProductDetail"

function App() {
  const [user, setUser] = useState(null)
  const [toggleFetch, setToggleFetch] = useState(false)
  
  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser()
      user ? setUser(user) : setUser(null)
    }
    fetchUser()
  }, [])

  const clearUser = () => setUser(null)

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
        <Route path="/sign-in">
          <SignIn />
        </Route>
        <Route path="/sign-out">
        </Route>
        <Route exact path="/products">
          <Products/>
        </Route>
        <Route path="/add-product">
        </Route>
        <Route exact path="/products/:id/edit">
        </Route>
        <Route exact path="/products/:id">
          <ProductDetail/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
