import React from 'react';
import {images} from '../../constants'
import {SubHeading} from '../../components'
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>

    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef } alt="Chef" />
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title="Chef's World" />
      <h1 className='headtext__cormorant'>What We Believe In</h1>

      <div className="app_chef_content">
        <div className="app_chef_quote">
          <img src={images.quote} alt="quote icon" />
          <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
        </div>
        <p className="p__opensans"> auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc. </p>
        </div>
        <div className='app_chef_sign'>
              <p>Arslan Abbas</p>
              <p className='p__opensans'>Chef & Founder</p>
          <img src={images.sign} alt="sign" />
        </div>
      

    </div>

  </div>
);

export default Chef;
 