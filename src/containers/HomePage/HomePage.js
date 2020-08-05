import React from 'react';
import OurServices from '../../components/OurServices/OurServices';
import IntroSection from '../../components/IntroSection/IntroSection';
import GetInTouch from '../../components/GetInTouch/GetInTouch';

function HomePage() {
  return (
    <div>
      <IntroSection />
      <GetInTouch />
      <OurServices />
    </div>
  );
}

export default HomePage;
