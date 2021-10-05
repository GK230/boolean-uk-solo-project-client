import "../styles/product-card.css"
import test from "../assets/clock.jpg"
import { Link } from "react-router-dom"
import { Item } from "../store"


type ProductPageProps = {
    item: Item;
  };

function ProductCard({ item }: ProductPageProps) {
    return (
        <Link to="/product-page">
        <article className="product-card">
            <img className="product-card-image" src={`baseUrl${item.image}`} alt={item.title}/>
            <h3 className="product-card-title">{item.title}</h3>
            <h4 className="product-card-credits">{item.credits}</h4>
        </article>
        </Link>
    )
}

export default ProductCard