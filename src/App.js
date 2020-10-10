import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import Login from "./components/Login/Login";
import Intro from "./components/Intro/Intro";
import Blog from "./components/Pages/Blog/Blog";
import Author from "./components/Pages/Author/Author";
import PrivateRoute from "./routes/PrivateRoute";

// import Dashboard from "./components/Pages/Author/Dashboard/Dashboard";
// import BlogList from "./components/Pages/Author/BlogList/BlogList";
import { removeToken } from "./utils/manageToken";

function App() {
  // removeToken();
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Intro} />
        <Route path="/login" component={Login} />
        <Route path="/blog" component={Blog} />
        {/* <Route path="/author" component={Author} /> */}
        <PrivateRoute>
          <Route path="/author" component={Author}>
            {/* <Route path="/dashboard" component={Dashboard} />
            <Route path="/blogs" component={BlogList} /> */}
          </Route>
        </PrivateRoute>
        <Route path="/**" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
