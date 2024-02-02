import React from 'react';
import SubHeading from '../SubHeading/SubHeading';

import './Newsletter.css';

const Newsletter = () => {
  return(
  <div className='app_newsletter'>
    <div className="newsletter_heading">
      <SubHeading title='Newsletter' />
      <h1 className='headtext__cormorant'>Subcribe to our Newsletter</h1>
      <p className='p__opensans'>And Never Miss Latest Updates!</p>
    </div>
    <div className="newsletter_input flex__center">
      <input type="email" placeholder="Enter your email address" />
      <button type="button" className="custom__button">Subscribe</button>
    </div>
  </div>
)};

export default Newsletter;
