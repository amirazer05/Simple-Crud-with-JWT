import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import EditUser from "./components/EditUser";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import GuardedRoute from "./guards/auth.guard";

function App() {
  const jwt = useSelector((state) => state.jwt);
  const [isAuthenticated, setIsAuthenticated] = useState(!!jwt);

  useEffect(() => {
    if (jwt) {
      console.log(jwt);
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
    console.log(isAuthenticated);
  }, [jwt]);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <GuardedRoute path="/dashboard" auth={isAuthenticated}>
          <Navbar />
          <Dashboard />
        </GuardedRoute>
        <Route path="/edit/:id">
          <EditUser />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
