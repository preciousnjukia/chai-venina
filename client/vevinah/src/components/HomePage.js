import React from 'react';
import '../App.css';
import ImageCarousel from './ImageCarousel';
import TodaysSpecialSection from './TodaysSpecialSection';
import DineIn from './dineIn';
import ReviewSection from './ReviewSection';
import HomeFooter from "./HomeFooter";



const HomePage = () => {
  return (
    <div className="app">
      <ImageCarousel />
      <TodaysSpecialSection/>
      <DineIn/>
      <ReviewSection/>
      <HomeFooter />
    </div>
  );
};

export default HomePage;
