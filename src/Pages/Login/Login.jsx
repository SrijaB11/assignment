import React from "react";
import { Link } from "react-router-dom";
import RightSideImg from "../../components/RightImg/RightSideImg";
import "./Login.css";

export default function Login() {
  return (
    <div className="login-page">
      <div className="login-container">
        {/* LEFT */}
        <div className="login-left">
          <h1>Login to your account</h1>
          <p className="subtitle">
            its easy! just take a minute and provide the details
          </p>

          <form className="login-form">
            <input type="text" placeholder="Email or Phone" />
            <input type="password" placeholder="Password" />

            <button type="submit">Login</button>
          </form>

          <p className="signup-text">
            Didn’t Have An Account? <Link to="/register">Signup</Link>
          </p>
        </div>

        {/* RIGHT */}
        <div className="login-right">
          <RightSideImg />
        </div>
      </div>
    </div>
  );
}
