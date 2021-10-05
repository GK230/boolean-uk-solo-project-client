import "../styles/product-card.css"
import { Item } from "../store"


type ProductPageProps = {
    item: Item;
  };


function SwappedProductCard({ item }: ProductPageProps) {
    return (
        <article className="product-card">
            <img className="product-card-image" src={`baseUrl${item.image}`} alt="title"/>
            <h3 className="product-card-title">{item.title}</h3>
            <h4 className="product-card-credits">{item.credits}</h4>
        </article>
    )
}

export default SwappedProductCard