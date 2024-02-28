import React, { useState } from 'react';
import Navbar from '../components/web/NavigationBar'; // NavigationBar component
import Footer from '../components/web/Footer';       // Footer component
import Testimonials from '../components/web/testimonials';
import Pricing from '../components/pricing';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <Navbar />
    {/* Pricing */}
    <Pricing />
    <Testimonials />
    <Footer />

  </>
  
  );
};

export default Modal;
