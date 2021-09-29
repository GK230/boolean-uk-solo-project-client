import { SyntheticEvent, useState } from "react"
import "../styles/signup.css"
import useStore from "../store"

const initialSignupForm = {
    email: "",
    username: "",
    avatar: "",
    password: ""
}

export type SignupForm = {
    email: string;
    username: string;
    avatar: string;
    password: string;
};

function Signup() {
    const [signupForm, setSignupForm] = useState<SignupForm>(initialSignupForm);
    const createUser = useStore((store) => store.createUser);

    function handleChange(e: SyntheticEvent) {
        const { name, value } = e.target as HTMLInputElement;
        setSignupForm({...signupForm, [name]: value})
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

          
        createUser(newUser)
        targetEvent.reset();
    }

    return (
        <main className="signup-page">
            <h2 className="signup-title">Sign up</h2>
            <form className="signup-form" onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email" onChange={handleChange}/>
                <input type="text" name="username" placeholder="Username" onChange={handleChange}/>
                <input type="text" name="avatar" placeholder="Avatar" onChange={handleChange}/>
                <input type="text" name="password" placeholder="Password" onChange={handleChange}/>
                <button className="signup-submit" type="submit" value="submit">Submit</button>
            </form>
        </main>
    )
}

export default Signup