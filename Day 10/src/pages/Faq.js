import React, { useState } from 'react';
import './faq.css'; 
import Topbar from '../components/Topbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

export default function Faq() {
  
  const faqItems = [
    {
      id: 1,
      question: 'Q1. What is Your Company Name?',
      answer: 'A1. At Friendify, we are more than just a social media platform. We are a community-driven space dedicated to fostering authentic connections and enhancing the way you interact with the world. Our mission is to bring people closer together, whether theyre reconnecting with old friends, meeting new ones, or sharing their passions with like-minded individuals.',
    },
    {
      id: 2,
      question: 'Q2. How can I contact your customer support?',
      answer: '1. Email Support Email Address: customer-support@example.com  Response Time: Our support team aims to respond to your email inquiries within 24 hours during business days.2. Phone Support Phone Number: +1 (234) 567-890 Operating Hours: Our phone support is available during our business hours, which are [mention your business hours here].',
    },

  ];

  // Define state to manage the visibility of answers
  const [expandedItem, setExpandedItem] = useState(null);

  // Function to toggle the visibility of answers
  const toggleAnswer = (itemId) => {
    if (expandedItem === itemId) {
      setExpandedItem(null);
    } else {
      setExpandedItem(itemId);
    }
  };

  return (
    <div className="main">
    <Topbar />
    <div className="mainContainer">
      <Sidebar />
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqItems.map((item) => (
          <div key={item.id} className="faq-item">
            <div
              className={`question ${expandedItem === item.id ? 'expanded' : ''}`}
              onClick={() => toggleAnswer(item.id)}
            >
              {item.question}
            </div>
            {expandedItem === item.id && (
              <div className="answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
    <Footer />
    </div>
  );
}
