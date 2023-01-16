import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { useNavigate,Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(input));
    alert("Successfully Register");
    navigate("/login");
  };

  return (
    <div className="wrapper   d-flex align-items-center justify-content-center w-100">
      <div className="register">
        <h2 className="mb-3">Create Account</h2>
        <label>Already have an account? </label>
        <Link to="/login"> Login</Link>
        <form className="need-validation" onSubmit={handleSubmit}>
          <div className="form-group mb-2  was-validated ">
            <label htmlFor="name" className="form-label">
              Your Name
            </label>
            <input
              name="name"
              value={input.name}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
              type="name"
              className="form-control"
              required
            ></input>
            <div className="invalid-feedback">Please enter your name</div>
          </div>

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
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
