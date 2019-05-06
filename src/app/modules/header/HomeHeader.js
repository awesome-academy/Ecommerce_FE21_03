import React from 'react';
import TopMenu from './TopMenu/TopMenu';
import HomeCarousel from './Carousel';
import Navbar from './Navbar/Navbar'

function HomeHeader() {
  return (
    <header className="header position-relative">
      <TopMenu />
      <HomeCarousel />
      <Navbar />
    </header>
  );
}

export default HomeHeader;
