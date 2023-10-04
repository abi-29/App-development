import React from 'react';
import './pets.css'; 
import Topbar from '../components/Topbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

export default function Pets() {
  const petPosts = [
    {
      id: 1,
      imageUrl: 'https://images.pexels.com/photos/1444321/pexels-photo-1444321.jpeg?auto=compress&cs=tinysrgb&w=600',
      text: 'Meet our adorable kitten, Fluffy!',
    },
    {
      id: 2,
      imageUrl: 'https://images.pexels.com/photos/1975989/pexels-photo-1975989.jpeg?auto=compress&cs=tinysrgb&w=600',
      text: 'Taking our dog, Max, for a walk in the park.',
    },
    {
      id: 3,
      imageUrl: 'https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg?auto=compress&cs=tinysrgb&w=600',
      text: 'Learn how to groom your pet for a healthy coat.',
    },
    {
      id: 4,
      imageUrl: 'https://images.pexels.com/photos/573293/pexels-photo-573293.jpeg?auto=compress&cs=tinysrgb&w=600',
      text: 'The joy of adopting a rescue pet.',
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
