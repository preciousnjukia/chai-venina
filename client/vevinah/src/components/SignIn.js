import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import Carousel1 from "../assets/dineinphoto.jpg";

const SignIn = () => {
  const [userCredentials, setUserCredentials] = useState({
    username: "",
    password: "",
  });

  const [userEmail, setUserEmail] = useState(""); // state to store user email

  const navigate = useNavigate();
  const image = [Carousel1];

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const proceedLogin = (e) => {
    e.preventDefault();

    if (validate()) {
      fetch("http://localhost:5000/user/" + userCredentials.username)
        .then((res) => res.json())
        .then((resp) => {
          if (Object.keys(resp).length === 0) {
            toast.error("Please enter a valid username");
          } else {
            if (resp.password === userCredentials.password) {
              toast.success("Success");
              // Store user email in state
              setUserEmail(resp.email);
              sessionStorage.setItem("username", userCredentials.username);
              sessionStorage.setItem("userrole", resp.role);
              navigate("/menu");
            } else {
              toast.error("Please enter valid credentials");
            }
          }
        })
        .catch((err) => {
          toast.error("Login failed due to: " + err.message);
        });
    }
  };

  const validate = () => {
    const { username, password } = userCredentials;
    let result = true;

    if (!username || username.trim() === "") {
      result = false;
      toast.warning("Please enter a username");
    }

    if (!password || password.trim() === "") {
      result = false;
      toast.warning("Please enter a password");
    }

    return result;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  return (
    <div className="row">
      <div className="offset-lg-3 col-lg-6" style={{ marginTop: "100px" }}>
      <img src={image} alt="menu-image" className="background-image"/>
        <form onSubmit={proceedLogin} className="container">
          <div className="login-card">
            <div className="login-header">
              <h1>Login</h1>
            </div>
            <div className="form-dialogue" style={{borderRadius:"0"}}>
              <div className="form-group">
                <label>
                  User Name <span className="errmsg">*</span>
                </label>
                <input
                  type="text"
                  value={userCredentials.username}
                  onChange={handleChange}
                  name="username"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>
                  Password <span className="errmsg">*</span>
                </label>
                <input
                  type="password"
                  value={userCredentials.password}
                  onChange={handleChange}
                  name="password"
                  className="form-control"
                />
              </div>
            </div>
            <div className="login-footer" style={{marginTop:"20%"}}>
              <Link to="/payment">
                <button className="continue-shopping">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;