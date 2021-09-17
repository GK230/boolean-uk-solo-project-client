import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import Home from "./pages/Home"
import Header from './components/Header';
import Products from './pages/Products';
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Profile from "./pages/Profile";


function App() {
  return (
    <Router>
      <div>

      <Header/>

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/signup" exact>
            <Signup />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/profile" exact>
            <Profile />
          </Route>
        </Switch>


      </div>

    </Router>
    
  );
}

export default App;
