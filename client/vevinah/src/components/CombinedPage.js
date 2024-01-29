import React from "react";
import Register from "./Register";
import SignIn from "./SignIn";
import './CombinedPage.css';

const CombinedPage = () => {
  return (
    <div className="combined-page-container">
      <div className="half-page">
        <SignIn />
      </div>
      <div className="half-page">
        <Register />
      </div>
    </div>
  );
};

export default CombinedPage;