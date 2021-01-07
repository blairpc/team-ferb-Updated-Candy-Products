import React from "react";
import "./Login.css";

function Login(){
    
    const loginuser = event =>{
        event.preventDefault()
    }
    return(
        <div className="login">
            <div className="login__container">
                <h2>Sign In</h2>
                <form>
                    <h5>E-Mail</h5>
                    <input type="email" />
                    <h5>Password</h5>
                    <input type="password" />
                    <button onClick={loginuser} type="submit" className="login__signInButton">Sign In</button>
                </form>
                 <p>By signing -in, you agree to Simply Sweet Candy Shop Terms and Conditions.</p>
                 <button className="login__registerButton">Create your S.S Candy Shop Account</button>
            </div>
        </div>
    )
}

export default Login;