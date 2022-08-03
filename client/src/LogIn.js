import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"
import SignUp from "./SignUp"

function Login( { setCurrentUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    
    const user = {
      username: username,
      password
    }

    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
    .then(res => {
    console.log(res)
    if (res.status == 200) {
      res.json().then((json) => {
        console.log(json)
        setCurrentUser(user)
        window.location.replace("/");})
    } else if (res.status == 500 || 401 || 201){
      res.json().then((json) => {
        console.log(json.errors);
        setError(json.errors);})
    }})
    setUsername("")
    setPassword("")
  }

  function handleGoToSignUp(e) {
    e.preventDefault()
    window.location.replace("/signup");
  }

  return (
    <div className='login'>
      <h1 className="login-head">Log In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username" className="username-2">username:  </label>
          <input
           type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        <br></br>
        <label className="password-2">password:  </label>
          <input
           type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        <br></br>
        {username && password ? <button className="button" type="submit">Login</button> : <button>NOT LOGGED IN</button>}
        <br></br>
      </form>

      <NavLink to="/SignUp" style={{ textDecoration: "none" }}>
        <h3 style={{ textDecoration: "none" }} className="form-label">
          Create Account
        </h3>
      </NavLink>
    </div>
  );
}

export default Login;