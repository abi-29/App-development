import React from 'react';
import Topbar from '../components/Topbar';
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import './home.css';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="main">
      <Topbar />
      <div className="mainContainer">
        <Sidebar />
        <Main />
      </div>
      <Footer />
    </div>
  );
}
