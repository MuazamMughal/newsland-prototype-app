// pages/about.tsx
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import React from 'react';


    

const About= () => {
  return (
    <div><Navbar/>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="mb-4">Welcome to Newsland, your trusted source for news and updates from around the world.</p>
        <p className="mb-4">At Newsland, we strive to provide accurate and unbiased news coverage across a wide range of topics.</p>
        <p className="mb-4">Our website covers four main categories:</p>
        <ul className="list-disc pl-4 mb-4">
          <li><strong>Global:</strong> Stay informed about global events and developments shaping our world.</li>
          <li><strong>Politics:</strong> Get insights into political news, elections, and government policies.</li>
          <li><strong>Sports:</strong> Follow the latest updates, scores, and highlights from the world of sports.</li>
          <li><strong>Fashion:</strong> Explore trends, styles, and news from the fashion industry.</li>
        </ul>
        <p>Thank you for choosing Newsland as your go-to source for reliable news and information.</p>
      </div><Footer/></div>
    
  );
};

export default About;
