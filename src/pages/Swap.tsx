import "../styles/signup.css"
import "../styles/swap.css"
import useStore from "../store"
import { useHistory } from "react-router"
import { SyntheticEvent, useState } from "react"

import { Link } from "react-router-dom"

function Swap() {
    // const currentUser = useStore(state => state.loggedUser)
    const addItem = useStore(state => state.addItem)
    
    const initialItemData= {
        itemImage: "",
        title: "",
        description: "",
        itemType: "",
        brand: ""
    }

    const [newItem, setNewItem] = useState(initialItemData)
    const history = useHistory()

    function handleChange(e: SyntheticEvent) {
        const { name, value } = e.target as HTMLInputElement;

        setNewItem({ ...newItem, [name]: value });

    }
 
    function handleSubmit(e: SyntheticEvent) {
        e.preventDefault()
        setNewItem(newItem)
        addItem(newItem)
    }

    return (
        <main className="signup-page swap-page">
            <h2 className="signup-title swap-title">Swap</h2>
            <form className="signup-form" onSubmit={handleSubmit}>
                <label>
                    Item photo:
                    <input className="itemPhotoFile" type="file" name="itemImage" placeholder="Item image" onChange={handleChange}/>
                </label>
                <input type="text" name="title" placeholder="Title" onChange={handleChange}/>
                <textarea name="description" placeholder="Description" onChange={handleChange}/>
                <input type="text" name="itemType" placeholder="Type of item" onChange={handleChange}/>
                <input type="text" name="brand" placeholder="Brand" onChange={handleChange}/>
                <button className="signup-submit" type="submit" value="submit">Submit</button>
            </form>
        </main>
    )
}

export default Swap