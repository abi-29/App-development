
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./login.css";
import { useDispatch, useSelector } from 'react-redux';
import { setEmail } from '../actions/emailActions';

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });


  
  const handleValidation = () => {
    let valid = true;
    const newErrors = {
      email: '',
      password: '',
    };

    

    if (!formData.email || !formData.email.includes('@')) {
      newErrors.email = 'Please enter a valid email address';
      valid = false;
    }


    if (!formData.password || formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleLoginClick = () => {
    const isValid = handleValidation();

    if (isValid) {
      
      navigate('/home');
    }
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };



  const dispatch = useDispatch();
const email = useSelector((state) => state.email);

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value,
  });

  // Dispatch the email to Redux store
  if (name === 'email') {
    dispatch(setEmail(value));
  }
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
        <div className="loginBox">
           <div className="aaaa">Media served with style and concern..Come and join us fast!!</div>
           <input
             type="text"
             name="email" 
             placeholder="Email"
             className="loginInput"
             value={formData.email}
            onChange={handleInputChange}
/>
    
        <div className="error">{errors.email}</div>

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="loginInput"
          value={formData.password}
          onChange={handleInputChange}
        />
        <div className="error">{errors.password}</div>

        <button onClick={handleLoginClick} className="loginButtonn">
          Log In
        </button>
        <span className="loginForgot">New to friendifyy!</span>
          <div>
          <button  onClick={handleRegisterClick} className="loginRegisterButton" >
            Create a New Account
          </button>
          </div>
      </div>
    </div>
    </div>
    </div>
  );
}





    