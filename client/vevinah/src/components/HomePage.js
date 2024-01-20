import React, { useState } from 'react';
import '../App.css';
import ImageCarousel from './ImageCarousel';
import TodaysSpecialSection from './TodaysSpecialSection';
import DineIn from './dineIn';
import ReviewSection from './ReviewSection';
import Footer from './Footer';


const HomePage = () => {
  return (
    <div className="app">
      <ImageCarousel />
      <TodaysSpecialSection/>
      <DineIn/>
      <ReviewSection/>
      <Footer/>
    </div>
  );
};

export default HomePage;
