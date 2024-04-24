import React from 'react';

import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import './Footer.scss'

const Footer = () => {

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:cluhasaar@gmail.com" className="greet-text">cluhasaar@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+37256923697" className="greet-text">+(372) 5692 3697</a>
        </div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
)