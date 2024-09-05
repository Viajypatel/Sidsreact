// App.js
import React from 'react';
 import Header from './components/Header';
 import HeroSection from './components/HeroSection';
import Hero from './components/Hero';
import Card1 from './components/Card1';
import Destination from './components/Destination';
import Card2 from './components/Card2';
import Hero2 from './components/Hero2';
import Footer from './components/Footer';
import Contact from './components/Contact';
function App() {
  return (
    <div className='bg-white'>
     <Header/>
     <HeroSection />
     <Hero/>
     <Card1/>
     <Destination/>
     <Card2/>
     <Hero2/>
      <Contact/>
     <Footer/>
    </div>
  );
}

export default App;
