import { useState, useEffect } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css'
import { verifyUser } from './services/users';
import Products from "./screens/Products/Products"
import Nav from "./components/shared/Nav/Nav"

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
      <Nav />
      <Switch>
        <Route exact path="/">
        </Route>
        <Route path="/sign-up">
        </Route>
        <Route path="/sign-in">
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
        </Route>
      </Switch>
    </div>
  );
}

export default App;
