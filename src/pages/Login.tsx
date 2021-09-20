import "../styles/signup.css"
import "../styles/login.css"
import { Link } from "react-router-dom"

function Login() {

    // handleSubmit(event) {
    //     event?.preventDefault()
    // }

    return (
        <main className="signup-page">
            <h2 className="signup-title">Log in</h2>
            <form className="signup-form" >
                <input type="text" name="username" placeholder="Username" />
                <input type="text" name="password" placeholder="Password"/>
                <button className="signup-submit" type="submit" value="submit">Submit</button>
            </form>
        </main>
    
    )
}

export default Login