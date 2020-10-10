import React, { Fragment } from "react";
import {  Redirect } from "react-router-dom";
import { isLogin } from "../utils/manageToken";

// const PrivateRoute = ({ component: Component, ...rest }) => {
//   console.log(isLogin());
//   return (
//     // Show the component only when the user is logged in
//     // Otherwise, redirect the user to /login page
//     <Route
//       {...rest}
//       render={(props) =>
//         isLogin() ? <Component {...props} /> : <Redirect to="/login" />
//       }
//     />
//   );
// };

const PrivateRoute = (props) => {
  return (
    <Fragment>{isLogin() ? props.children : <Redirect to="/login" />}</Fragment>
  );
};

export default PrivateRoute;
