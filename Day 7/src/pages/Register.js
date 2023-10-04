// Register.js
/*import React from 'react';
import "./Register.css";
import { useNavigate } from 'react-router-dom';

function Register() {
    // Get the navigate function from React Router
    const navigate = useNavigate();
  
    // Function to handle the login button click and navigate to the Home page
    const handleLoginButtonClick = () => {
      // Navigate to the "/home" route when the button is clicked
      navigate('/home');
    };

  return (
    <div className="login">
    <div className="loginWrapper">
      <div className="loginLeft">
        <h3 className="loginLogo">friendifyy</h3>
        <span className="loginDesc">
          Connect with friends and the world around you on friendifyy.
        </span>
      </div>
      <div className="loginRight">
        <div className="loginBoxx">
           <div className="aa">Media served with style and concern..Come and join us fast!!</div>
          <input placeholder="Name" className="loginInput" />
          <input type='number' placeholder="Mobile Number" className="loginInput" />
          <input type='mail' placeholder="E-mail" className="loginInput" />
          <input type='password' placeholder="Password" className="loginInput" />
          <input type='date' placeholder="DateOfBirth" className="loginInput" />
        
          <button className="loginButton" onClick={handleLoginButtonClick}>Log In</button>
          <span className="loginForgot">Be friends with friendifyy!!</span>
          <div>
         
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Register;*/



import React, { useState } from 'react';
import "./Register.css";
import { useNavigate } from 'react-router-dom';


function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    email: '',
    password: '',
    dateOfBirth: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.name) {
      newErrors.name = 'Name is required';
    }
    if (!formData.mobileNumber) {
      newErrors.mobileNumber = 'Mobile Number is required';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    if (!formData.dateOfBirth) {
      newErrors.dateOfBirth = 'Date of Birth is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      
      navigate('/home');
    }
  };


  const isValidEmail = (email) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  };

  

  return (
    <div className="login">
    <div className="loginWrapper">
      <div className="loginLeft">
        <h3 className="loginLogo">friendifyy</h3>
        <span className="loginDesc">
          Connect with friends and the world around you on friendifyy.
        </span>
      </div>
      <div className="loginRight">
        <div className="loginBoxx">
           <div className="aa">Media served with style and concern..Come and join us fast!!</div>


 
        <form onSubmit={handleSubmit}>
          {/* Name Input */}
          <input
            type="text"
            placeholder="Name"
            className="loginInput"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}

          {/* Mobile Number Input */}
          <input
            type="number"
            placeholder="Mobile Number"
            className="loginInput"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
          />
          {errors.mobileNumber && <span className="error">{errors.mobileNumber}</span>}

          {/* Email Input */}
          <input
            type="email"
            placeholder="E-mail"
            className="loginInput"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}

          {/* Password Input */}
          <input
            type="password"
            placeholder="Password"
            className="loginInput"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}

          {/* Date of Birth Input */}
          <input
            type="date"
            placeholder="Date of Birth"
            className="loginInput"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
          />
          {errors.dateOfBirth && <span className="error">{errors.dateOfBirth}</span>}

          {/* Log In Button */}
          <button className="loginButtonn"  type="submit">
            Log In
          </button>
        </form>
        <span className="loginForgot">Be friends with friendifyy!!</span>
          
        </div>
      </div>
    </div>
  </div>
  );
}

export default Register;
