import axios from "axios";

export const Auth_Url = "https://localhost:44380/api/auth";

export const Blog_Url = "https://localhost:44380/api/blog";

export const SignIn = async (data) => {
  const response = await axios.post(`${Auth_Url}/login`, data);
  console.log("running");
  console.log(response);
  return response;
};

export const SignUp = async (data) => {
  const response = await axios.post(`${Auth_Url}/Register`, data);
  console.log("Registering!!!!");
  return response;
};
