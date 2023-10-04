import React from 'react';
import Topbar from '../components/Topbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Social from '../components/Social';
import './about.css';

export default function About() {
  return (
    <div className="main">
      <Topbar />
      <div className="mainContainer">
        <Sidebar />
       
        
<div className="about-content">
  <h2>About Us..</h2>
  <p className="left-align">
  Welcome to Friendify, your digital home for meaningful connections and social networking.
  </p>
  <h2>Who We Are..</h2>
  <p className="left-align">
  At Friendify, we are more than just a social media platform. We are a community-driven space dedicated to fostering authentic connections and enhancing the way you interact with the world. Our mission is to bring people closer together, whether they're reconnecting with old friends, meeting new ones, or sharing their passions with like-minded individuals.
  </p>
  <h2>Our vision..</h2>
  <p className="left-align">
  We envision a world where technology strengthens human bonds rather than isolates us. Friendify was born out of the idea that social media should be a force for good, enriching lives by facilitating genuine connections, conversations, and experiences.
  </p>
  <h2>Join the Friendify Community..</h2>
  <p className="left-align">
  Friendify is more than just a website; it's a community of individuals who believe in the power of connection. We invite you to join us on this exciting journey to create a world where relationships matter most.
  </p>
  <p className="left-align">
  Thank you for being a part of Friendify!
  </p>
</div>
   </div>
   <Footer />
   < Social />
    </div>
  );
}
