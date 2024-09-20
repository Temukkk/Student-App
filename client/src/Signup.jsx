import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import '../styles/Signup.css'

function Signup() {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/register', {
            name, email, password
        })
        .then(result => {console.log(result)
            navigate('/login')
        })
        .catch(err => console.log(err))
    };

    return (
        <div className="one">
            <div className="wrapper">
                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-box">
                        <label htmlFor="name">
                            <strong>Name</strong>
                        </label>
                        <input 
                        type="text"
                        placeholder="Enter Name"
                        autoComplete="off"
                        name="name" 
                        className="form-control rounded-0" 
                        onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="input-box">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input 
                        type="email"
                        placeholder="Enter Email" 
                        autoComplete="off"
                        name="email" 
                        className="form-control rounded-0"
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-box">
                        <label htmlFor="password">
                            <strong>Password</strong>
                        </label>
                        <input type="password" 
                        placeholder="Enter Password"
                        name="password" 
                        className="form-control rounded-0"
                        onChange={(e) => setPassword(e.target.value)}

                        />
                    </div>
                    <button type="submit" className="button">
                        Register
                    </button>
                </form>
                <p>Already Have An Account?</p>
                <Link to="/login" className="login">
                    Login
                </Link>
            </div>
        </div>
    )
}

export default Signup;
