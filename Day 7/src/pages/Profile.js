
/*import React from 'react';
import Topbar from '../components/Topbar';
import Sidebar from '../components/Sidebar';
import './profile.css';

export default function Profile() {
  return (
    <div className="main">
      <Topbar />
      <div className="mainContainer">
        <Sidebar />
        </div>
    </div>
  );
}*/


import React, { useState } from 'react';
import Topbar from '../components/Topbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import './profile.css';

export default function Profile() {
  // Define state variables to store form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    bio: '',
    profilePhoto: null, // For storing the selected profile photo file
    dateOfBirth: '',
    country: '',
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    // Use a conditional to check for file input type
    const newValue = type === 'file' ? files[0] : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    // FormData object will contain all the form data
    console.log('Form Data:', formData);
  };

  return (
    <div className="main">
      <Topbar />
      <div className="mainContainer">
        <Sidebar />
        <div className="centered-profile-form">
        <div className="form-box">
          <h2>Edit Profile</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:  </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="bio">Bio:      </label>
              <textarea
                id="bio"
                name="bio"
                rows="4"
                value={formData.bio}
                onChange={handleInputChange}
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="profilePhoto">Profile Photo: </label>
              <input
                type="file"
                id="profilePhoto"
                name="profilePhoto"
                accept="image/*"
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="dateOfBirth">Date of Birth:</label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country:</label>
              <input
                type="text"
                id="country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit">Save Changes</button>
          </form>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}