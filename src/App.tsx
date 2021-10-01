import { useState } from "react";
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
import { postLoginUser } from "./utils/apiClient";
import Swap from "./pages/Swap";
// import { LoggedInHeader } from './components/Header';

export type UserCreds = {
  id: number;
  username: string;
  password: string;
};

export type User = {
  id: number;
  username: string;
  password: string;
  bio?: string;
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

  // useEffect(() => {
  //   getValidateCurrToken()
  //     .then(user => {
  //       setLoggedUser(user);
  //       history.push("/profile");
  //     })
  //     .catch(err => {
  //       setErrorStatus(err.message);
  //     });
  // }, [history, setLoggedUser]);


  return (
    <Router >
      <div className="app-tsx">
      
      <Header loggedUser={loggedUser} clearUserState={clearUserState} />


        

        <Switch>
        <Route path="/" exact>
            <Home />
          </Route>
          
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




