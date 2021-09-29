import "../styles/home.css"
import { Link } from "react-router-dom"

function Home() {

    return (
        <main className="home">
            <img className="main-image" src="https://www.kindpng.com/picc/m/218-2189200_shopping-designer-template-man-and-woman-shopping-clipart.png"
            alt="some shopaholics" />
            <h2 className="title">Feed your shopaholicism and save the planet</h2>
            <Link to="/products">
                <button className="home-shop">Shop!</button>
            </Link>
        </main>

    )
}

export default Home