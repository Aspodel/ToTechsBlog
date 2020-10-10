import React, { useState } from "react";
import { SignUp } from "../../utils/api";

const RegisterForm = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    Username: "",
    Password: "",
    RePassword: "",
    Name: "",
    Email: "",
    Birthday: ""
  });

  const handleChange = (e) => {
    e.preventDefault();

    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await SignUp(data);
    console.log(result);
  };

  const pageUp=()=>{
    // if(data.Password === data.RePassword &&)
  };

  return (
    <>
      <form className={step === 1 ? "form" : "form off"}>
        <label htmlFor="">Account</label>
        <input
          name="Username"
          value={data.Username}
          onChange={handleChange}
          type="text"
        />
        <label htmlFor="">Password</label>
        <input
          name="Password"
          value={data.Password}
          onChange={handleChange}
          type="password"
        />
        <label htmlFor="">Re-Password</label>
        <input
          name="RePassword"
          // value={data.RePassword}
          onChange={handleChange}
          type="password"
        />

        <div className="option-button">
          <span></span>
          <span className="button" onClick={() => setStep(step + 1)}>
            Next
          </span>
        </div>
      </form>

      <form className={step === 2 ? "form" : "form off"}>
        <label htmlFor="">Name</label>
        <input
          name="Name"
          value={data.Name}
          onChange={handleChange}
          type="text"
        />
        <label htmlFor="">Email</label>
        <input
          name="Email"
          // value={data.Email}
          onChange={handleChange}
          type="text"
        />
        <label htmlFor="">Birthday</label>
        <input
          name="Birthday"
          // value={data.Birthday}
          onChange={handleChange}
          type="date"
        />

        <div className="option-button">
          <span onClick={() => setStep(step - 1)}>Back</span>
          <button onClick={handleSubmit}>Sign up</button>
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
