import { SyntheticEvent, useState } from "react";
import "../styles/signup.css"
import "../styles/login.css"


const initialForm = {
    username: "",
    password: "",
  };
  
  export type UserCredentials = {
    username: string;
    password: string;
  };
  
  type LoginProps = {
    handleSubmit: (formData: { password: string; username: string }) => void;
  };

function Login({ handleSubmit }: LoginProps) {

    const [loginForm, setLoginForm] = useState<UserCredentials>(initialForm);

    function handleLoginChange(e: SyntheticEvent) {
        const { name, value } = e.target as HTMLInputElement;
    
        setLoginForm({ ...loginForm, [name]: value });
      }

      return (
        <main className="signup-page">
          <h2 className="signup-title">Log in</h2>
          <form className="signup-form" onSubmit={e => {
        e.preventDefault();
        handleSubmit(loginForm);
       
      }}
      >
            <input type="text" name="username" placeholder="Username" onChange={handleLoginChange} value={loginForm.username}/>
            <input type="password" name="password" placeholder="Password"onChange={handleLoginChange} value={loginForm.password}/>
            <button className="signup-submit" type="submit" value="submit" >Submit</button>
          </form>
      
    </main>

    
    )
}

export default Login


