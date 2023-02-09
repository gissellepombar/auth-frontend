
import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../App"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"


export default function SignupForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { setUser } = useContext(AuthContext)
    const navigate = useNavigate()

    //stops page from refreshing 
    const handleSubmit = (e) => {
        e.preventDefault();

    //make a post request to the API with the form data
    fetch('https://auth-api-gp.web.app/signup', {
        method: 'POST', 
        headers: { 
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({email, password}),
    })
    // create a new user in the databse
    //then...
        .then(res => res.json())
        .then(response => {
            //1. do something w the new user
            setUser(response.user)
            //2. redirect to the content page
            navigate('/secret')
        })
        .catch(err => alert(err.message))
        setUser({ email, password })
        navigate('/secret')
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <Form.Group>
                    <p className="text-light">Please sign up continue to the Beer festival.</p>
                    <Form.Label>Email</Form.Label>
                    <Form.Control 
                        name="email"
                        type="email" 
                        placeholder="Enter Email"
                        value={email}
                        className="p-3 hover-effect" 
                        onChange={e => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        name="password"
                        type="password" 
                        placeholder="Password"
                        value={password}
                        className="p-3 hover-effect"
                        onChange={e => setPassword(e.target.value)} />
                </Form.Group>
                <Button 
                    variant="outline-light" 
                    type="submit"
                    size="lg"
                    className="mt-3 hover-effect">
                    Submit</Button>
            </form>
        </>
    )
}