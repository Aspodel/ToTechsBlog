import React, { useState } from "react";
import { SignIn } from "../../utils/api";
import { isLogin, storeToken } from "../../utils/manageToken";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useHistory } from "react-router-dom";

const LoginForm = () => {
  const [data, setData] = useState({ username: "", password: "" });
  let history = useHistory();

  const handleChange = (e) => {
    e.preventDefault();

    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await SignIn(data);
    console.log(result.statusText);

    if (result.status) {
      storeToken(result.data.token);
      console.log(result.data.token);
      console.log(isLogin());
      history.push("/author");
    }
  };

  return (
    <form className="form">
      <div className="signin-with-gg">
        <FontAwesomeIcon className="icon" icon={faGoogle} />
        <span>Sign in with Google</span>
      </div>
      <label htmlFor="">Username</label>
      <input
        name="username"
        type="text"
        value={data.username}
        onChange={handleChange}
      />
      <label htmlFor="">Password</label>
      <input
        name="password"
        type="password"
        value={data.password}
        onChange={handleChange}
      />
      <div className="option-button">
        <button onClick={handleSubmit}>Sign in</button>
        <span>Forgot Password?</span>
      </div>
    </form>
  );
};

export default LoginForm;
