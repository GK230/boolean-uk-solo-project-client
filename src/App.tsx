import React, { useEffect, useState } from "react";
import {
  Redirect,
  useHistory,
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./pages/Home"
import  { Header } from './components/Header';
import Products from './pages/Products';
import Signup from "./pages/Signup";
import Login, { UserCredentials } from "./pages/Login";
import Profile from "./pages/Profile";
import ProductPage from "./pages/ProductPage";
import Basket from "./pages/Basket";
import Swap from "./pages/Swap";
import { LoggedInHeader } from './components/Header';
import { getValidateCurrToken, postLoginUser } from "./utils/apiClient";


export type UserCreds = {
  id: number;
  username: string;
  password: string;
};

export type User = {
  id: number;
  username: string;
  password: string;
};

type ErrorOpts = {
  [key: string]: null | string;
};

function App() {
  const [loggedUser, setLoggedUser] = useState<User | null>(null);
  const [errorStatus, setErrorStatus] = useState<string>("empty");
  const history = useHistory();

  function loginUser(userCreds: UserCredentials) {
    postLoginUser(userCreds).then(user => {
      setLoggedUser(user);
      history.push("/");
    });
  }

  function clearUserState(data: null) {
    setLoggedUser(data);
  }

  useEffect(() => {
    getValidateCurrToken()
      .then((user) => {
        setLoggedUser(user);
        history.push("/");      
      })
      // .catch(err:(any: any) => {
      //   setErrorStatus(err.message);
      // });
  }, [history, setLoggedUser]);



  const errorMsgs: ErrorOpts = {
    empty: null,
    401: "You weren't previously logged in",
    403: null,
  };

  console.log(loggedUser)

  return (
    <Router>

      
      <Header loggedUser={loggedUser} clearUserState={clearUserState} />
      {errorStatus && (
          <h3 style={{ color: "red" }}>{errorMsgs[errorStatus]}</h3>
        )}
      <div className="app-tsx">

      <Switch>
        <Route path="/" exact>
            <Home />
          </Route>
        <Route path="/signup" exact>
            <Signup />
          </Route>
          <Route path="/login" exact>
            <Login handleSubmit={loginUser} />
          </Route>
          <Route path="profile" exact>
          <Profile item={{
              id: 0,
              userId: 0,
              credits: 0,
              image: "",
              title: "",
              description: "",
              itemTypes: [],
              brand: "",
              review: undefined
            }}/> : <Redirect to="/" />
          </Route>
          <Route path="/products" exact>
            <Products item={{
              id: 0,
              userId: 0,
              credits: 0,
              image: "",
              title: "",
              description: "",
              itemTypes: [],
              brand: "",
              review: undefined
            }} />
          </Route>
          <Route path="/product-page" exact>
            <ProductPage item={{
              id: 0,
              userId: 0,
              credits: 0,
              image: "",
              title: "",
              description: "",
              itemTypes: [],
              brand: "",
              review: undefined
            }} />
          </Route>
          <Route path="/profile" exact>
            <Profile item={{
                id: 0,
                userId: 0,
                credits: 0,
                image: "",
                title: "",
                description: "",
                itemTypes: [],
                brand: "",
                review: undefined
              }}/> 
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


