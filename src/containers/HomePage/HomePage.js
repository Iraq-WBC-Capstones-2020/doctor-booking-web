import React from 'react';
import OurServices from '../../components/OurServices/OurServices';
import IntroSection from '../../components/IntroSection/IntroSection';
import VideoSection from '../../components/VideoSection/VideoSection';
import GetInTouch from '../../components/GetInTouch/GetInTouch';

function HomePage() {
  return (
    <div>
      <IntroSection />
      <GetInTouch />
      <OurServices />
      <VideoSection />

    </div>
  );
}

export default HomePage;
