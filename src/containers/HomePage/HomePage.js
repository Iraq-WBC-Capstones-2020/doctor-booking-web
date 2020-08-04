import React from 'react';
import OurServices from '../../components/OurServices/OurServices';
import IntroSection from '../../components/IntroSection/IntroSection';
import GetInTouch from '../../components/GetInTouch/GetInTouch';

function HomePage() {
  return (
    <div>
      <IntroSection />
      <OurServices />
      <GetInTouch />
    </div>
  );
}

export default HomePage;
