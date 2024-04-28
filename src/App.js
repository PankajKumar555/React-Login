import React from "react";
import Rlogo from "./Images/R-logo.png";
import Glogo from "./Images/G-logo.png";
import Flogo from "./Images/F-logo.png";
import Tlogo from "./Images/T-logo.png";
import "./App.css";

function App() {
  const submit = (e) => {
    e.preventDefault();
    alert("Form Submitted");
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="container">
        <img src={Rlogo} className="rlogo" alt="logo" />

        {/* <p className="txt">REACT LOGIN</p> */}
        <div className="loginsignup">
          <p className="login">Login</p>
          <p className="signup">Signup</p>
        </div>

        <hr className="line" />
        <form className="logininput" onSubmit={submit}>
          <input
            placeholder="Email Address"
            type="email"
            className="emailinput"
            required
          ></input>
          <input
            placeholder="Password"
            type="password"
            className="passwordinput"
            required
          ></input>
          <button className="loginbtn">Login </button>
        </form>

        <div className="forgot">
          <p className="forgotpswd">Forgot Password?</p>
          <p className="loginwith">or login with</p>
        </div>

        <div className="social">
          <img src={Glogo} className="socialimg" alt="logo" />
          <img src={Flogo} className="socialimg" alt="logo" />
          <img src={Tlogo} className="socialimg" alt="logo" />
        </div>

        <div className="footer">
          <p className="footertxt1">
            Don’t have an account?{" "}
            <span className="newaccount">Create new now!</span>
          </p>
          <p className="footertxt2">
            By signing up, you are agree with our{" "}
            <span className="newaccount">
              <u>Terms & Conditions</u>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
