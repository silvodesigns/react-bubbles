import React, {useState} from "react";
import axios from 'axios';

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [credentials, setCredentials] = useState({
      email: '',
      password: '',
  })

  const handleChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    })
  }
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      <form>
            <input type="email" name="email" placeholder="Email" value={credentials.email} onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" value={credentials.password}  onChange={handleChange}/>
            <button>Log In</button>


      </form>
    </>
  );
};

export default Login;
