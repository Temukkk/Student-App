import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../styles/login.css';
import Loading from "./Loading";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    axios.post('http://localhost:3001/login', {
        email,
        password
    })
    .then(result => {
      console.log(result);
      if (result.data === "Success") {
        setTimeout(() => {
          navigate('/home'); 
        }, 2500); 
      } else {
        setLoading(false); 
      }
    })
    .catch(err => {
      console.log(err);
      setLoading(false);
    });
  };

  if (loading) {
    return <Loading />;
  }

  return(
    <div className={`d-flex justify-content-center align-items-center login-fade ${loading ? 'fade-out' : ''}`}>
      <div className="wrapper">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
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
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input 
              type="password" 
              placeholder="Enter Password"
              name="password" 
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Login
          </button>
        </form> 
        <p className="text">Sign Up closed due to demo view.</p>
        {/* <Link to='/register' className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
          Sign up
        </Link> */}
      </div>
    </div>
  );
}

export default Login;
