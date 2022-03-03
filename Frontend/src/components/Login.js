import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const Auth = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/login", {
        email: email,
        password: password,
      });
      localStorage.setItem("access_token", response.data.accessToken);
      dispatch({ type: "SET_JWT", payload: response.data.accessToken });
      history.push("/dashboard");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <section className="hero has-background-grey-light is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4-desktop">
              <form onSubmit={Auth} className="box">
                <p className="has-text-centered">{msg}</p>
                <div className="field mt-5">
                  <label className="label">Email or Username</label>
                  <div className="controls">
                    <input type="text" className="input" placeholder="Username" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                </div>
                <div className="field mt-5">
                  <label className="label">Password</label>
                  <div className="controls">
                    <input type="password" className="input" placeholder="******" value={password} onChange={(e) => setPassword(e.target.value)} />
                  </div>
                </div>
                <div className="field mt-5">
                  <button className="button is-success is-fullwidth">Login</button>
                  <a href="/register" className="btn btn-info" role="button">
                    Register
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
