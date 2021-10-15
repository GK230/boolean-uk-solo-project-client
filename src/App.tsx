import React, { useEffect, useState } from "react";
import {
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
import Success from "./pages/Success";
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

function App() {
  const [loggedUser, setLoggedUser] = useState<User | null>(null);
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


  
  return (
    <Router>

      
      <Header loggedUser={loggedUser} clearUserState={clearUserState} />
      
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
          <Route path="/profile" exact>
            <Profile loggedUser={loggedUser} clearUserState={clearUserState} item={{
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
          
          <Route path="/basket" exact>
            <Basket />
          </Route>
          <Route path="/swap" exact>
            <Swap loggedUser={loggedUser} clearUserState={clearUserState}/>
          </Route>
          <Route path="/success" exact>
            <Success />
          </Route>
        </Switch>
        </div>
      </Router>
    
  );
}

export default App;


