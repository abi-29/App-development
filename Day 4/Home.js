import React from 'react';
import Topbar from './Topbar';
import Sidebar from './Sidebar';

export default function Home() {
  return (
    <>
    <Topbar />
    <div className="homeContainer">
        <Sidebar />

      </div>
  </>
   )
}
