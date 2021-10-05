import "../styles/product-card.css"
import test from "../assets/clock.jpg"
import { Item } from "../store"


type ProductPageProps = {
    item: Item;
  };

function PurchasedProductCard({ item }: ProductPageProps) {
    return (
        <article className="product-card">
            <img className="product-card-image" src={test} alt="title"/>
            <h3 className="product-card-title">Roman Numeral Clock</h3>
            <h4 className="product-card-credits">Credits: 5</h4>
        </article>
    )
}

export default PurchasedProductCard