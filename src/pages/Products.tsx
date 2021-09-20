import { Link } from "react-router-dom"
import ProductCard from "../components/ProductCard"
import "../styles/products.css"

function Products() {
    return (
    <main className="products-page">
        <header>
            <button className="products-button filter">Filter</button>
            <div className="auth-buttons">
                <Link to="/login">
                    <button className="products-button auth-button login">Log in</button>
                </Link>
                <Link to="/signup">
                    <button className="products-button auth-button signup">Sign up</button>
                </Link>
            </div>
        </header>
        <section className="filters"></section>
        <section className="container">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />

        </section>
    </main>

    )
}

export default Products