import { useEffect } from "react"
import "../styles/profile.css"
// import PurchasedProductCard from "../components/PurchasedProductCard"
import SwappedProductCard from "../components/SwappedProductCard"
import useStore from "../store"


export type UserCreds = {
    id: number;
    username: string;
    password: string;
  };
  

type HeaderProps = {
    loggedUser: UserCreds | null;
    clearUserState: (data: null) => void;
    item: {
        id: 0,
        userId: 0,
        credits: 0,
        image: "",
        title: "",
        description: "",
        itemTypes: [],
        brand: "",
        review: undefined
      }
  };

  
  
function Profile({ loggedUser, clearUserState }: HeaderProps) {

    const userItems = useStore(state => state.userItems)
    const getUserItems = useStore(state => state.getUserItems)


    let id = 0;
    if (loggedUser) {
         id = loggedUser.id
    }

    
    useEffect(() => {
         getUserItems(id)      
        
    }, 
 [getUserItems, id])


  
    if (!userItems ) {
        return <h2>loading...</h2>;
    } else {

    console.log(userItems)

      
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
}


export default Profile


