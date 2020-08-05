import React from 'react';
import OurServices from '../../components/OurServices/OurServices';
import IntroSection from '../../components/IntroSection/IntroSection';
import GetInTouch from '../../components/GetInTouch/GetInTouch';
import NewsLetter from '../../components/NewsLetter/NewsLetter';
function HomePage() {
  return (
    <div>
      <IntroSection />
      <GetInTouch />
      <OurServices />
      <NewsLetter />
    </div>
  );
}

export default HomePage;
