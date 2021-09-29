import logo from "../assets/logo.png"
import '../styles/header.css'
import { Link, Redirect } from "react-router-dom"
import { UserCreds } from "../App";
import { getLogoutUser } from "../utils/apiClient";
import useStore from "../store"

type HeaderProps = {
    loggedUser: UserCreds | null;
    clearUserState: (data: null) => void;
  };


  export function LoggedInHeader({
    username,
    clearUserState,
  }: any) {
    const loggedUser = useStore(state => state.loggedUser)

    


    return (
      <section className="loggedin-header">
        <Link to="/">
              <img className="logo" src={logo} alt="Logo" />
            </Link>
        {loggedUser === null? 
  
              <Redirect to="/" />:

        <h3 className="welcome">Welcome, {loggedUser.username}</h3>}
        <div className="loggedin-buttons">
          <Link to="/swap">
            <button className="swap">Swap</button>
          </Link>
          <Link to="/products">
            <button className="shop">Shop</button>
          </Link>
          <Link to="/profile">
            <button className="profile">Profile</button>
          </Link>
          <button
            className="logout"
            onClick={() => {
              getLogoutUser().then(data => clearUserState(data));
            }}
          >
            Logout
          </button>
        </div>
      </section>
    );
  }
  

  export function Header({ loggedUser, clearUserState }: HeaderProps) {

    return (
        <section className="header">
            <Link to="/">
              <img className="logo" src={logo} alt="Logo" />
            </Link>
            <div className="auth-buttons">
              
                <Link to="/login">
                    <button className="products-button auth-button login">Log in</button>
                </Link>
                
                <Link to="/signup">
                    <button className="products-button auth-button signup">Sign up</button>
                </Link>
                
            </div>
            
        </section>


    )
}

