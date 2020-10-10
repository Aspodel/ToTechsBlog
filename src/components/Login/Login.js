import React, { useEffect, useState } from "react";
import "./Login.scss";
import logo from "../../image/logo.png";

import LoginForm from "./FormLogin";
import RegisterForm from "./FormRegister";
import { isLogin } from "../../utils/manageToken";
import { Redirect } from "react-router-dom";

const Login = () => {
  const [mode, setMode] = useState(true);

  useEffect(() => {
    if (mode) {
      document.title = "Sign in | ToTechs";
    } else {
      document.title = "Sign up | ToTechs";
    }
  });

  if (isLogin()) {
    return <Redirect to="/author" />;
  }

  return (
    <div className="login-page">
      <div className="box">
        <div className="header-detail">
          <div className="logo">
            <img src={logo} alt="" />
            <div className="company-name">
              <span>totechs</span>
              <span>.</span>
            </div>
          </div>

          <div className="sign-up" onClick={() => setMode(!mode)}>
            {mode ? (
              <>
                <span>No account?</span>
                <span>Sign up</span>
              </>
            ) : (
              <>
                <span>Have account?</span>
                <span>Sign in</span>
              </>
            )}
          </div>
        </div>
        <div className="title">{mode ? "Sign in" : "Sign up"}</div>
        {mode ? <LoginForm /> : <RegisterForm />}
      </div>
    </div>
  );
};

export default Login;
