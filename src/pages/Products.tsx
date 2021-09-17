import { Link } from "react-router-dom"
import ProductCard from "../components/ProductCard"
import "../styles/products.css"

function Products() {
    return (
    <>
    <header>
        <Link to="/login">
            <button>Log in</button>
        </Link>

        <Link to="/signup">
            <button>Sign up</button>
        </Link>



    </header>
    <section className="container">
        <ProductCard />
        
    </section>
    </>

    )
}

export default Products