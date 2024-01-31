import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const [user, setUser] = useState({
    id: "",
    first_name: "",
    last_name: "",
    password: "",
    email: "",
    phone: "",
  });

  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setUser({ ...user, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/users", {
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
        alert("Invalid");
      });
  };

  return (
    <div className="offset-lg-3 col-lg-6">
      <div className="card">
        <div className="card-header">
          <h1>Sign up</h1>
        </div>
        <div className="card-body">
          <form className="container" onSubmit={handleSubmit}>
            <div className="row">
              {["First name", "Last name", "Email", "Phone", "Password"].map(
                (field) => (
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
                )
              )}
            </div>
            <div className="form-footer">
              <button type="submit" className="continue-shopping">
                {registrationSuccess ? "Registered!" : "Signup"}
              </button>{" "}
            </div>
          </form>
        </div>
      </div>
      {registrationSuccess && (
        <div className="alert alert-success" role="alert">
          Registration successful! You can now sign in.
        </div>
      )}
    </div>
  );
};

export default Register;
