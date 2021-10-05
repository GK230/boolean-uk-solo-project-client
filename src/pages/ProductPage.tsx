import "../styles/product-page.css"
import { Link } from "react-router-dom"
import basket from "../assets/basket.png"
import { Item } from "../store"
 
type ProductPageProps = {
    item: Item;
  };

function ProductPage({ item }: ProductPageProps) {

    return (
        <main className="product-page">
            <Link to="/basket">
                <img className="basket-icon" src={basket} alt="basket" />
            </Link>
            <div className="product">
                <h3 className="product-title">{item.title}</h3>
                <div className="product-image-wrapper">
                    <img className="product-image" src={`baseUrl${item.image}`} alt={item.title}/>
                </div>
                <p className="product-description">{item.description}</p>
                <h4 className="product-credits">{item.credits}</h4>
                <button className="add-to-basket">Add to basket</button>
            </div>
        </main>
    )
}

export default ProductPage