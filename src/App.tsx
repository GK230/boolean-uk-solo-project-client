import React, { useEffect, useState } from "react";
import {
  Redirect,
  useHistory,
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import Home from "./pages/Home"
import  { Header } from './components/Header';
import Products from './pages/Products';
import Signup from "./pages/Signup";
import Login, { UserCredentials } from "./pages/Login";
import Profile from "./pages/Profile";
import ProductPage from "./pages/ProductPage";
import Basket from "./pages/Basket";
import { getValidateCurrToken, postLoginUser } from "./utils/apiClient";
import Swap from "./pages/Swap";
import useStore from "./store"; 
import { LoggedInHeader } from './components/Header';

export type UserCreds = {
  id: number;
  username: string;
  password: string;
};

type ErrorOpts = {
  [key: string]: null | string;
};

function App() {
  const loggedUser = useStore((state: any) => state.loggedUser)
  const setLoggedUser = useStore((state: any) => state.setLoggedUser)

  const [errorStatus, setErrorStatus] = useState<string>("empty");
  let history = useHistory();

  function loginUser(userCreds: UserCredentials) {
    postLoginUser(userCreds).then(user => {
      setLoggedUser(user);
      history.push("/product-page");
    });
  }

  useEffect(() => {
    getValidateCurrToken()
      .then(user => {
        setLoggedUser(user);
        history.push("/profile");
      })
      .catch(err => {
        setErrorStatus(err.message);
      });
  }, []);

  function clearUserState(data: null) {
    setLoggedUser(data);
  }

  const errorMsgs: ErrorOpts = {
    empty: null,
    401: "You weren't previously logged in",
    403: null,
  };

  type HeaderProps = {
    loggedUser: UserCreds | null;
    clearUserState: (data: null) => void;
  };

  return (
    <Router >
      <div className="app-tsx">
      
      {loggedUser ? (
        <LoggedInHeader
          loggedUser={loggedUser.username}
          clearUserState={clearUserState}
        />
      ) : <Header loggedUser={loggedUser} clearUserState={clearUserState}/> }
      
      {/* {errorStatus && (
          <h3 style={{ color: "red" }}>{errorMsgs[errorStatus]}</h3>
        )} */}
        

        <Switch>
        <Route path="/" exact>
            <Home />
          </Route>m
          
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/product-page" exact>
            <ProductPage />
          </Route>
          <Route path="/signup" exact>
            <Signup />
          </Route>
          <Route path="/login" exact>
          <Login handleSubmit={loginUser} />
          {loggedUser?.username ? <Profile /> : <Redirect to="/login"/> }
          </Route>
          <Route path="/profile" exact>
          {loggedUser?.username ? <Profile /> : <Redirect to="/login"/> }
          </Route>
          <Route path="/basket" exact>
            <Basket />
          </Route>
          <Route path="/swap" exact>
            <Swap />
          </Route>
        </Switch>
        </div>
      </Router>
    
  );
}

export default App;
