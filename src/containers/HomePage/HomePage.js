import React from 'react';
import OurServices from '../../components/OurServices/OurServices';
import IntroSection from '../../components/IntroSection/IntroSection';
import VideoSection from '../../components/VideoSection/VideoSection';
import GetInTouch from '../../components/GetInTouch/GetInTouch';
import AppSection from '../../components/AppSection/AppSection';
import NewsLetter from '../../components/NewsLetter/NewsLetter';
import SearchForm from '../../components/SearchPage/SearchForm/SearchForm'
function HomePage() {
  return (
    <div>
      <IntroSection />
      <GetInTouch />
      <OurServices />
      <AppSection />
      <VideoSection />
      <NewsLetter />
      <SearchForm/>
    </div>
  );
}

export default HomePage;
