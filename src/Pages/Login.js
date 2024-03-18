import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/Dashboard")
  }

  function handlesignup() {
    navigate("/Signup")
  }
  return (
    <div>
      <section className="login container container-space">
        <div className="leftDiv">
          <div className="contentDiv">
            <p className="heading">Welcome to Toy’s Cove</p>
            <p className="subHeading">Welcome! Please enter your details.</p>

            <p className="emailHeading">Email</p>
            <input
              className="inputSection"
              type="text"
              placeholder="johndoe@gmail.com"
              value={Email}
              onChange={handleChangeEmail}
            />

            <p className="passwordHeading">Password</p>
            <input
              className="inputSection"
              type="text"
              placeholder="**********"
              value={Password}
              onChange={handleChangePassword}
            />

            <p className="forgetHeading">Forget password ?</p>

            <div className="loginDiv" onClick={handleNavigate}>
              <p>Log in</p>
            </div>

            <p className="continueHeading">Or continue with</p>
            <div className="buttonDiv">
              <div className="buttonGoogle">
                <Icon
                  icon="flat-color-icons:google"
                  color="white"
                  width="20"
                  height="20"
                />
                <p>Google</p>
              </div>
              <div className="buttonFacebook">
                <Icon
                  icon="logos:facebook"
                  color="white"
                  width="20"
                  height="20"
                />
                <p>Facebook</p>
              </div>
            </div>
            <p className="noAccount">
              Don’t have an account?
              <a className="noAccountTwo" href="/signup" onClick={handlesignup}>
                Sign up for free!
              </a>
            </p>
          </div>
        </div>

        <div className="rightDiv">
          <div className="imageDiv">
            <img
              src="..\assets\images\Login_Signup\airplane.png"
              className="imageAeroplane"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
