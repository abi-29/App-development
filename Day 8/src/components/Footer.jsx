

/*import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy;  <a href='./home'>2023 Friendify - Social media app, coimbatore. </a></p>
        <ul>
          <li><a href="./aboutus">About Us</a></li>
          <li><a href="contactus">Contacts</a></li>
          <li><a href="chatbot">Chatbot</a></li>
          <li><a href="rightsreserved">All Rights Reserved.      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Cookies Policy | Privacy Policy </a></li>
        </ul>
      </div>
    </footer>
  );
}*/



import React from 'react';
import './footer.css'; // Make sure to import your footer's CSS file

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/faq">FAQ</a>
          <a href="/terms-and-conditions">Terms and Conditions</a>
        </div>
        <p>&copy; {new Date().getFullYear()} Friendifyy</p>
      </div>
    </footer>
  );
}
