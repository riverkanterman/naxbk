import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup( { setCurrentUser }) {
    const [error, setError] = useState([])
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [password_confirmation, setPasswordConfirmation] = useState("")

    let navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault()
        fetch("/users", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username,
                password: password,
                password_confirmation: password_confirmation,
            })
        })
        .then(res => {
            console.log(res)
            if (res.status === 201) {
                res.json().then((user) => {
                  console.log(user)
                  setCurrentUser(user)
                  window.location.replace("/");
                })
            } else if (res.status === 200){
                res.json().then((json) => {
                  console.log(json);
                  setError(json.errors);
                })
            }
        }
    )}
    
    const handleBack = () => {
        window.location.replace("/login");
    }

    return (
        <div className='signup'>
            <button onClick={handleBack} className="login-page-button"> Already a user? Log in here </button>
            <h1 className="signup-text">Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username" className="username-1">username:  </label>
                    <input
                        type="text"
                        id="username"
                        placeholder="enter username here"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                <br></br>
                <label htmlFor="password" className="password-1">password:  </label>
                    <input
                        type="password"
                        id="password"
                        placeholder="enter password here"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                <br></br>
                <label htmlFor="password_confirmation" className='confirm-pass'>confirm password:  </label>
                    <input
                        type="password"
                        id="password_confirmation"
                        placeholder="sorry, 1 more time"
                        value={password_confirmation}
                        onChange={e => setPasswordConfirmation(e.target.value)}
                    />
                <br></br>
                <button type="submit" className="button"> Create User </button>
                <br></br>
                {error && <div className="error">{error.join(", ")}</div>}
            </form>
        </div>
    );
}

export default Signup;