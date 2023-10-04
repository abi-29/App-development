import React from 'react';
import Topbar from '../components/Topbar';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import './home.css';
import Footer from '../components/Footer';
import './privacy.css';

export default function Privacy() {
  return (
    <div className="main">
      <Topbar />
      <div className="mainContainer">
        <Sidebar />
        <div className="privacy-policy">
      <div className="container">
        <h1>Privacy Policy</h1>
        <p>
        Personal Information: We may collect personal information such as your name, email address, and other contact details when you interact with our services.<br></br>

Usage Information: We automatically collect information about your usage of our services, including your IP address, browser type, and device information.<br></br>


Cookies and Tracking Technologies: We use cookies and similar tracking technologies to collect information about your interactions with our services.
        </p>
        
        {/* Add more sections and content as needed */}
      </div>
    </div>
      </div>
      <Footer />
    </div>
  );
}
