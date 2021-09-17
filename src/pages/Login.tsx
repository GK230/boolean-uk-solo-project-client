import "../styles/product-card.css"
import test from "../assets/clock.jpg"
import { Link } from "react-router-dom"

function Login() {

    // handleSubmit(event) {
    //     event?.preventDefault()
    // }

    return (
        <>
            <form className="signup-form" >
                <input type="text" name="username" placeholder="Username" />
                <input type="text" name="password" placeholder="Password"/>
                <input type="submit" value="Submit" />
            </form>
        </>
    
    )
}

export default Login