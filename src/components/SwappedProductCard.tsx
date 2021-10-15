import "../styles/product-card.css"
import { Item } from "../store"


type ProductPageProps = {
    item: Item;
  };



function SwappedProductCard({ item }: ProductPageProps) {
    const baseUrl = process.env.REACT_APP_API_URL 

    return (
        <article className="product-card">
            <img className="product-card-image" src={`${baseUrl}/${item.image}`} alt={item.title}/>
            <h3 className="product-card-title">{item.title}</h3>
            <h4 className="product-card-credits">{item.credits}</h4>
        </article>
    )
}

export default SwappedProductCard