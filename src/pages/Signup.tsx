import { SyntheticEvent } from "react"
import "../styles/signup.css"
import useStore from "../store"

function Signup() {

    const createUser = useStore((store) => store.createUser);

    const initialSignupForm = {
        email: "",
        username: "",
        avatar: "",
        password: ""
    }

    function handleSubmit(event: SyntheticEvent) {
        event.preventDefault();
        const targetEvent = event.target as HTMLFormElement;
        
    let newUser = {
        email: targetEvent.email.value,
        username: targetEvent.username.value,
        avatar: targetEvent.avatar.value,
        password: targetEvent.password.value,
      };

    createUser(newUser);
    targetEvent.reset();

}

    

    return (
        <>
        <form className="signup-form" onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="Email"/>
            <input type="text" name="username" placeholder="Username"/>
            <input type="text" name="avatar" placeholder="Avatar"/>
            <input type="text" name="password" placeholder="Password"/>
            <input type="submit" value="Submit" />
            </form>
        </>
    
    )
}

export default Signup