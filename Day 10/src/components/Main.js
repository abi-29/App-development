import React from 'react';
import { useSelector } from 'react-redux';
import "./main.css";
import { Link } from 'react-router-dom';

export default function Main() {
  const email = useSelector((state) => state.email);

  const posts = [
    {
      id: 1,
      imageUrl: 'https://images.pexels.com/photos/674580/pexels-photo-674580.jpeg?auto=compress&cs=tinysrgb&w=600',
      text: 'I love cats because I enjoy my home; and little by little, they become its visible soul.',
      className: "image",
      width: 600,
      height: 400,
    },
   
  ];

  return (
    <div className="aa">
    <p>Hiii {email} !!<br />Come and explore the world !!</p>
    <div className="posts">
      {posts.map((post) => (
        <div key={post.id} className={`post ${post.id === 1 || post.id === 2 ? 'highlighted' : ''}`}>
          {post.id === 1 ? <h4><Link to="/pets" className="pets-link">Pets</Link></h4> : null} {/* Link to the "Pets" page */}
           
            <img
              src={post.imageUrl}
              alt={`Post ${post.id}`}
              width={post.width}
              height={post.height}
            />
            <p>{post.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


