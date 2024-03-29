import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading'

import './Header.css';
import { images } from '../../constants';

const Header = () =>{ 
  return(
  <div className='app_header app__wrapper section__padding'>
    <div className='app__wrapper_info'>
      <SubHeading title='Chase the new flavour' />
      <h1 className='app_header-h1'>The Key To Fine Dining</h1>
      <p className='p__opensans' style={{margin: '2rem 0'}} >Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>
    <div className='app__wrapper_img'>
<img src={images.welcome} alt="welcom" />
      
    </div>
  </div>
)};

export default Header;
