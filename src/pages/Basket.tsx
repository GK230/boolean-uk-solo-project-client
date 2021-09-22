import "../styles/product-page.css"
import { Link } from "react-router-dom"
import "../styles/basket.css"
import BasketItem from "../components/BasketItem"


function Basket() {
    return (
        <main className="basket-page">
            <section className="basket-products">
                <BasketItem />
            </section>
        </main>
    )
}

export default Basket