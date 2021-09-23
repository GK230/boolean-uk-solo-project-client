import logo from "../assets/logo.png"
import '../styles/header.css'
import { Link, useLocation } from "react-router-dom"
import { UserCreds } from "../App";
import { getLogoutUser } from "../utils/apiClient";

type HeaderProps = {
    loggedUser: UserCreds | null;
    clearUserState: (data: null) => void;
  };


  function LoggedInHeader({
    username,
    clearUserState,
  }: {
    username: string;
    clearUserState: (data: null) => void;
  }) {
    return (
      <section className="loggedin-header">
        <h3 className="welcome">Welcome, {username}</h3>
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
  

  function Header({ loggedUser, clearUserState }: HeaderProps) {
    const location = useLocation();

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
            {loggedUser ? (
        <LoggedInHeader
          username={loggedUser.username}
          clearUserState={clearUserState}
        />
      ) : null}
        </section>


    )
}

export default Header