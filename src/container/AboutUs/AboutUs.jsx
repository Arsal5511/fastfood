import React from 'react';

import './AboutUs.css';
import { images } from '../../constants';

const AboutUs = () => (
  <div className='app_about app__bg flex__center section__padding' id='About'>
    <div className="about_overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>

    <div className="about_content flex__center">
      <div className="about_content_aboutus ">
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt="spoon" className='spoon__img' />
        <p className="p__opensans">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente quae modi voluptatem ipsa. Quos veritatis amet expedita cupiditate eveniet voluptate eum dolor, tempora distinctio nihil tenetur, eaque saepe ea sunt?</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

      <div className="about_content_knife ">
        <img src={images.knife} alt="knife" className='knife__img' />
      </div>

    <div className="about_content_history ">
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt="spoon" className='spoon__img' />
        <p className="p__opensans">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente quae modi voluptatem ipsa. Quos veritatis amet expedita cupiditate eveniet voluptate eum dolor, tempora distinctio nihil tenetur, eaque saepe ea sunt?</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>


    </div>
    
  </div>
);

export default AboutUs;
