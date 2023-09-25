import React from 'react';
import './food.css'; 
import Topbar from '../components/Topbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

export default function Food() {
  const petPosts = [
    {
      id: 1,
      imageUrl: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600',
      text: 'One cannot think well, love well, sleep well, if one has not dined well',
    },
    {
      id: 2,
      imageUrl: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600',
      text: 'Let food be thy medicine and medicine be thy food.',
    },
    {
      id: 3,
      imageUrl: 'https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&w=600',
      text: 'People who love to eat are always the best people.',
    },
    {
      id: 4,
      imageUrl: 'https://images.pexels.com/photos/551997/pexels-photo-551997.jpeg?auto=compress&cs=tinysrgb&w=600',
      text: 'The only way to get rid of a temptation is to yield to it.',
    },
  ];

  return (
    <div className="main">
      <Topbar />
      <div className="mainContainer">
        <Sidebar />
    <div className="pets-container">
      
      <div className="pet-posts">
        {petPosts.map((post) => (
          <div key={post.id} className="pet-post">
            <img
              src={post.imageUrl}
              alt={`Pet Post ${post.id}`}
              width={600}
              height={400}
            />
            <p>{post.text}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
    < Footer />
    </div>
  );
}
