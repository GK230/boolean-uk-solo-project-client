import { SyntheticEvent, useState } from "react"
import "../styles/signup.css"
import useStore from "../store"

const initialSignupForm = {
    email: "",
    username: "",
    password: ""
}

export type SignupForm = {
    email: string;
    username: string;
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
            password: targetEvent.password.value,
            totalCredits: 0
          };

        createUser(newUser)
        targetEvent.reset();
    }

    return (
        <main className="signup-page">
            <h2 className="signup-title">Sign up</h2>
            <form className="signup-form" onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email" required onChange={handleChange}/>
                <input type="text" name="username" placeholder="Username" required onChange={handleChange}/>
                <input type="password" name="password" placeholder="Password" required onChange={handleChange}/>
                <button className="signup-submit" type="submit" value="submit">Submit</button>
            </form>
        </main>
    )
}

export default Signup