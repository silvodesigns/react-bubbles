import React, {useState} from "react";
import axios from 'axios';

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [credentials, setCredentials] = useState({
      username: '',
      password: '',
  })

  const handleChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000', credentials)
        .then( res =>  {
          console.log(res.data)
          localStorage.setItem("token", res.data.token)
        })
        .catch(err => {
          console.log(err)
        })
  }
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <p>Build a login page here</p>
      <form>
            <input type="username" name="username" placeholder="Username" value={credentials.username} onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" value={credentials.password}  onChange={handleChange}/>
            <button onSubmit={handleSubmit}>Log In</button>


      </form>
    </>
  );
};

export default Login;
