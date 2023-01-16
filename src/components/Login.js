import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    const loggeduser = JSON.parse(localStorage.getItem("user"));
    if (
      input.email === loggeduser.email &&
      input.password === loggeduser.password
    ) {
      localStorage.setItem("loggedin", true);
      alert("Successfully Login");
      navigate("/");
    } else {
      alert("Wrong Email and Password");
    }
  };
  return (
    <div className="wrapper   d-flex align-items-center justify-content-center w-100">
      <div className="register">
        <h2 className="mb-3">Login Form</h2>

        <form className="need-validation" onSubmit={handleLogin}>
          <div className="form-group mb-2 was-validated">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              name="email"
              value={input.email}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              type="email"
              className="form-control"
              required
            ></input>
            <div className="invalid-feedback">Please enter your email</div>
          </div>

          <div className="form-group mb-2 was-validated">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              name="password"
              value={input.password}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              type="password"
              className="form-control"
              required
            ></input>

            <div className="invalid-feedback">Please enter your password</div>
          </div>

          <button type="submit" className="btn btn-success block mt-2 w-100">
            Login
          </button>
          <br />

          <label>Dont have an account? </label>

          <Link to="/register"> Register here</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
