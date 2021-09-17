import "../styles/product-card.css"
import test from "../assets/clock.jpg"
import { Link } from "react-router-dom"

function ProductCard() {
    return (
        <article className="product-card">
            <img className="product-image" src={test} alt="title"/>
            <h3 className="product-title">Roman numeral clock</h3>

        </article>
    
    )
}

export default ProductCard