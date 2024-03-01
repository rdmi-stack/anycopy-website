import React, { useState } from 'react';
import Navbar from '../components/web/NavigationBar'; // NavigationBar component
import Footer from '../components/web/Footer';       // Footer component
import FeatureSection1 from '../components/web/FeatureSection1';
import FeatureSection3 from '../components/web/FeatureSection3';
import Feature4 from '../components/feature4';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    
    <>
    <Navbar />
    <FeatureSection3 />
<Feature4 />
    <FeatureSection1 />

    <Footer />  
  </>
  
  );
};

export default Modal;
