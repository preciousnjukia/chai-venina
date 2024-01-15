import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    password: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();

  const isEmailValid = (email) => {
    return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
  };

  const isFormValid = () => {
    const { id, name, password, email } = user;
    if (!id || !name || !password || !email) {
      toast.warning("Please fill in all fields");
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
      // Perform form submission logic
      fetch("http://localhost:8000/user", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(user),
      })
        .then((res) => {
          toast.success("Registered successfully.");
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

  return (
    <div className="offset-lg-3 col-lg-6">
      <form className="container" onSubmit={handleSubmit}>
        <div className="card">
          <div className="card-header">
            <h1>User Registration</h1>
          </div>
          <div className="card-body">
            <div className="row">
              {["id", "password", "name", "email", "phone"].map((field) => (
                <div key={field} className="col-lg-6">
                  <div className="form-group">
                    <label>
                      {field.charAt(0).toUpperCase() + field.slice(1)}{" "}
                      <span className="errmsg">*</span>
                    </label>
                    <input
                      type={field === "password" ? "password" : "text"}
                      value={user[field]}
                      onChange={handleChange}
                      name={field}
                      className="form-control"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="card-footer">
            <button type="submit" className="btn btn-primary">
              Register
            </button>{" "}
            |{" "}
            <Link to={"/sign_in"} className="btn btn-danger">
              Close
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;