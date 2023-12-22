import React from 'react';
import LandingPage from '../LandingPage/LandingPage';
import AboutSection from '../AboutSection/AboutSection';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
  return (
    <div>
      <LandingPage></LandingPage>
      <AboutSection></AboutSection>
      <Footer></Footer>
    </div>
  );
};

export default Home;