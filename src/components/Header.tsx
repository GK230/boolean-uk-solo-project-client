import logo from "../assets/logo.png"
import '../styles/header.css'
import { Link } from "react-router-dom"
import { getLogoutUser } from "../utils/apiClient";

export type UserCreds = {
  id: number;
  username: string;
  password: string;
};

type HeaderProps = {
    loggedUser: UserCreds | null;
    clearUserState: (data: null) => void;
  };


  export function LoggedInHeader({
    username,
    clearUserState,
  }: {
    username: string;
    clearUserState: (data: null) => void;
  }) {

    return (
      <section className="loggedin-header">
        <Link to="/">
              <img className="logo" src={logo} alt="Logo" />
            </Link>
        
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
  

  export function Header({ loggedUser, clearUserState }: HeaderProps) {

    return (
        <section className="header">
          <Link to="/">
              <img className="logo" src={logo} alt="Logo" />
            </Link>
          {loggedUser ? (
        <LoggedInHeader
          username={loggedUser.username}
          clearUserState={clearUserState}
        />
      ) : 
            
            <div className="auth-buttons">
              
                <Link to="/login">
                    <button className="products-button auth-button login">Log in</button>
                </Link>
                
                <Link to="/signup">
                    <button className="products-button auth-button signup">Sign up</button>
                </Link>
                
            </div>}
            
        </section>


    )
}

 

