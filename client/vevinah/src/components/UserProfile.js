import React, { useState, useEffect } from "react";

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await fetch("http://localhost:5000/users", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setUserProfile(data);
        } else {
          console.error("Failed to fetch user profile");
        }
      } catch (error) {
        console.error("Error during profile fetch:", error);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <div className="offset-lg-3 col-lg-6">
      <div className="card">
        <div className="card-header">
          <h1>User Profile</h1>
        </div>
        <div className="card-body">
          <p>First Name: {userProfile.first_name}</p>
          <p>Last Name: {userProfile.last_name}</p>
          <p>Email: {userProfile.email}</p>
          <p>Phone: {userProfile.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;