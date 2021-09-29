import { SyntheticEvent, useState, useEffect } from "react";
import "../styles/signup.css"
import "../styles/login.css"
import { useHistory} from "react-router-dom"
import { getValidateCurrToken } from "../utils/apiClient";

const initialForm = {
    username: "",
    password: "",
  };
  
  export type UserCredentials = {
    username: string;
    password: string;
  };

  export type UserCreds = {
    id: number;
    username: string;
    password: string;
  };
  
  type LoginProps = {
    handleSubmit: (formData: { password: string; username: string }) => void;
  };

function Login({ handleSubmit }: LoginProps) {
  let history = useHistory();


    const [loginForm, setLoginForm] = useState<UserCredentials>(initialForm);
    const [loggedUser, setLoggedUser] = useState<UserCreds | null>(null);
    const [errorStatus, setErrorStatus] = useState<string>("empty");
    console.log(loggedUser)
    console.log(errorStatus)

    function handleLoginChange(e: SyntheticEvent) {
        const { name, value } = e.target as HTMLInputElement;
    
        setLoginForm({ ...loginForm, [name]: value });
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
      }, [history]);

      return (
        <main className="signup-page">
          <h2 className="signup-title">Log in</h2>
          <form className="signup-form" onSubmit={e => {
        e.preventDefault();
        setLoginForm(initialForm)
        handleSubmit(loginForm)
      }}
      >
            <input type="text" name="username" placeholder="Username" onChange={handleLoginChange} value={loginForm.username}/>
            <input type="text" name="password" placeholder="Password"onChange={handleLoginChange} value={loginForm.password}/>
            <button className="signup-submit" type="submit" value="submit">Submit</button>
          </form>
      
    </main>

    
    )
}

export default Login


