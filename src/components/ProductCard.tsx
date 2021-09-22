import "../styles/product-card.css"
import test from "../assets/clock.jpg"
import { Link } from "react-router-dom"

function ProductCard() {
    return (
        <Link to="/product-page">
        <article className="product-card">
            <img className="product-card-image" src={test} alt="title"/>
            <h3 className="product-card-title">Roman Numeral Clock</h3>
            <h4 className="product-card-credits">Credits: 5</h4>
        </article>
        </Link>
    )
}

export default ProductCard