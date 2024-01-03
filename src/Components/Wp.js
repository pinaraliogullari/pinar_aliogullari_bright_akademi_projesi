import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import logo from '../Images/smallLogo.jpg';

const wp = () => {
  return (
  <FloatingWhatsApp
  phoneNumber='05346279603'
  accountName='Bright Akademie'
  avatar={logo}
  message="Hello, how can I help you?"
  
  />
  )
}

export default wp;