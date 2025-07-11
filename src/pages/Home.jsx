import React from 'react';
import HeroSection from '../components/HeroSection';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-r from-blue-100 to-blue-300 py-6 sm:py-10">
      <HeroSection />
    </div>
  );
};

export default Home;
