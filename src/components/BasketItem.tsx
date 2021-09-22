import test from "../assets/clock.jpg"
import "../styles/basket-item.css"

function BasketItem() {
    return (
        <article className="basket-item">
            <img className="basket-item-image" src={test} alt="clock" />
                <h4 className="basket-item-title">Roman clock</h4>
                <h4 className="basket-item-credits">5 credits</h4>
                <button className="buy">Buy</button>
        </article>
    )
}

export default BasketItem