


import React from "react";
import "./topbar.css";
import { Link, useNavigate } from "react-router-dom";

export default function Topbar() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/");
  };

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">friendifyy</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <select className="searchInput">
            <option >
              <Link to="/pets">Pets</Link>
            </option>
            <option >
              <Link to="/food">Food</Link>
            </option>
          </select>
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <Link to="/home" className="topbarLink">
            Homepage
          </Link>
          <Link to="/about" className="topbarLink">
            About Us
          </Link>
          <button className="loginButtonnnn" onClick={handleLoginClick}>
            Login
          </button>
        </div>
        <div className="topbarIcons">
        </div>
        <Link to="/profile">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs1OqK8Ma_9J1We63B-QzdqDpLqwXZm_KKaw&usqp=CAU"
            alt=""
            className="topbarImg"
          />
        </Link>
      </div>
    </div>
  );
}
