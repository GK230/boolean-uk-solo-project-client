import "../styles/product-page.css"
import test from "../assets/clock.jpg"
import { Link } from "react-router-dom"
import basket from "../assets/basket.png"

function ProductPage() {
    return (
        <main className="product-page">
            <Link to="/basket">
                <img className="basket-icon" src={basket} alt="basket" />
            </Link>
            <div className="product">
                <h3 className="product-title">Roman Numeral Clock</h3>
                <div className="product-image-wrapper">
                    <img className="product-image" src={test} alt="title"/>
                </div>
                <p className="product-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit doloribus ab ut et eos ad dicta perspiciatis, nemo perferendis doloremque provident similique, nesciunt quod dolorum totam repudiandae sunt. Corrupti, voluptate?</p>
                <h4 className="product-credits">Credits: 5</h4>
                <button className="add-to-basket">Add to basket</button>
            </div>
        </main>
    )
}

export default ProductPage