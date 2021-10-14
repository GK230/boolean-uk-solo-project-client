import { useEffect } from "react"
import "../styles/profile.css"
// import PurchasedProductCard from "../components/PurchasedProductCard"
import SwappedProductCard from "../components/SwappedProductCard"
import useStore, { Item } from "../store"
import { useParams } from "react-router-dom";


type ProductPageProps = {
    item: Item;
  };
  
  
function Profile({ item }: ProductPageProps) {
    const userItems = useStore(state => state.userItems)
    const getUserItems = useStore(state => state.getUserItems)

    const { id } = useParams<{ id: string }>();
    console.log(id)
    let newId = +id


    useEffect(() => {
        getUserItems(newId);
        console.log("userItem", userItems)
      }, [getUserItems, userItems, newId]);


      if (!userItems) {
        return <h2>loading...</h2>;
    }  
      
    return (
        <main className="profile">
            <section className="profile-details">
                <h4 className="profile-credits">40 credits</h4>
            </section>
            <h3 className="profile-items-title">Purchased items</h3>
            <section className="purchased-products">
                 
    
            </section>
            <h3 className="profile-items-title">Swapped items</h3>
            <section className="swapped-products">
            
            {userItems.map(item =>
                <SwappedProductCard item={item}/>
            )}
            </section>
        </main>
    
    )
}

export default Profile