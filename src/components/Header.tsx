import logo from "../assets/logo.png"
import '../styles/header.css'

function Header() {
    return (
        <section className="header">
            <img className="logo" src={logo} alt="Logo" />
        </section>


    )
}

export default Header