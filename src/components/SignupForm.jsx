import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../App"


export default function SignupForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { setUser } = useContext(AuthContext)
    const navigate = useNavigate()

    //stops page from refreshing 
    const handleSubmit = (e) => {
        e.preventDefault();

    //make a post request to the API with the form data
    // create a new user in the databse
    //then...
    //1. do something w the new user
    //use setUser
    setUser({ email, password })
    //2. redirect to the content page
    navigate('/secret')
    }
    return (
        <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email &nbsp;
            <input type="email" name="email" 
            value={email} onChange={e => setEmail(e.target.value)}/>
        </label><br />
        <label htmlFor="password">Password &nbsp;
            <input type="password" name="password" 
            value={password} onChange={e => setPassword(e.target.value)}/>
        </label><br />
        <input type='submit' value='Sign Up' />
        </form>
    )
}