import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

const Register = () => {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    password: "",
    confirmPassword: "",
    email: "",
    phone: "",
  });

  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const navigate = useNavigate();

  const isEmailValid = (email) => {
    return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
  };

  const isFormValid = () => {
    const { first_name, last_name, password, confirmPassword, email, phone } = user;

    if (!first_name || !last_name || !password || !confirmPassword || !email || !phone) {
      toast.warning("Please fill in all fields");
      return false;
    }

    if (password !== confirmPassword) {
      toast.warning("Passwords do not match");
      return false;
    }

    if (!isEmailValid(email)) {
      toast.warning("Please enter a valid email");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      fetch("http://localhost:5000/user", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(user),
      })
        .then((res) => {
          toast.success("Registered successfully.");
          setRegistrationSuccess(true);
          navigate("/sign_in");
        })
        .catch((err) => {
          toast.error("Failed: " + err.message);
        });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const navigateToSignIn = () => {
    navigate("/sign_in");
  };

  return (
    <div className="offset-lg-3 col-lg-6">
      <form className="container" onSubmit={handleSubmit}>
        <div className="card">
          <div className="card-header">
            <h1>User Registration</h1>
          </div>
          <div className="card-body">
            <div className="row">
              {["first_name", "last_name", "email", "phone", "password", "confirmPassword"].map((field) => (
                <div key={field} className="col-lg-6">
                  <div className="form-group">
                    <input
                      type={field.includes("password") ? "password" : "text"}
                      value={user[field]}
                      onChange={handleChange}
                      name={field}
                      className="form-control"
                      placeholder={`${field.charAt(0).toUpperCase() + field.slice(1)} *`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="card-footer">
            <button type="submit" className="btn btn-primary signup-btn">
              {registrationSuccess ? "Registered!" : "Register"}
            </button>{" "}
            <button type="button" className="btn btn-danger" onClick={navigateToSignIn}>
              Sign In
            </button>
          </div>
        </div>
      </form>
      {registrationSuccess && (
        <div className="alert alert-success" role="alert">
          Registration successful! You can now sign in.
        </div>
      )}
    </div>
  );
};

export default Register;