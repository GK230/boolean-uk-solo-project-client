import logo from "../assets/logo.png"
import '../styles/header.css'
import { Link } from "react-router-dom"

function Header() {
    return (
        <section className="header">
            <Link to="/">
            <img className="logo" src={logo} alt="Logo" />
            </Link>
        </section>


    )
}

export default Header