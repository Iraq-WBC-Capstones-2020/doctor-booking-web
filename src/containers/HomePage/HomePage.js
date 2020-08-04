import React from 'react';
import OurServices from '../../components/OurServices/OurServices';
import IntroSection from '../../components/IntroSection/IntroSection';
import GetInTouch from '../../components/GetInTouch/GetInTouch';
import AppSection from '../../components/AppSection/AppSection'

function HomePage() {
  return (
    <div>
      <IntroSection />
      <GetInTouch />
      <OurServices />
      <AppSection />
    </div>
  );
}

export default HomePage;
