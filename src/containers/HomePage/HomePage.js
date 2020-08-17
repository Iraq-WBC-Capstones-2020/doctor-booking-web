import React from 'react';
import OurServices from '../../components/HomePage/OurServices/OurServices';
import IntroSection from '../../components/HomePage/IntroSection/IntroSection';
import VideoSection from '../../components/HomePage/VideoSection/VideoSection';
import GetInTouch from '../../components/HomePage/GetInTouch/GetInTouch';
import AppSection from '../../components/HomePage/AppSection/AppSection';
import NewsLetter from '../../components/HomePage/NewsLetter/NewsLetter';
function HomePage() {
  return (
    <div>
      <IntroSection />
      <GetInTouch />
      <OurServices />
      <AppSection />
      <VideoSection />
      <NewsLetter />
    </div>
  );
}

export default HomePage;
