import React from 'react';
import { images, data } from '../../constants';
import { SubHeading, MenuItem } from '../../components';
import './SpecialMenu.css';

const SpecialMenu = () => {

  return(
  <div className='app_menu flex__center section__padding'>

    <div className="app_menu_title">
      <SubHeading title='Menu that fits your palatte' />
      <h1 className='headtext__cormorant'>Today's special</h1>
    </div>

    <div className="app_menu_content">
      <div className="app_menu_content_wine flex__center">
        <p className='app_menu_content_heading'>Wine & Beer</p>
        <div className="app_menu_content_items">
          {data.wines.map((wine, index) =>(
            <MenuItem key={wine.title+index} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
        </div>
      </div>


    <div className="app_menu_img">
      <img src={images.menu} alt="menu img" />
    </div>


    <div className="app_menu_content_cocktails flex__center">
        <p className='app_menu_content_heading'>Cocktails</p>
        <div className="app_menu_content_items">
          {data.cocktails.map((cocktails, index) =>(
             <MenuItem key={cocktails.title+index} title={cocktails.title} price={cocktails.price} tags={cocktails.tags} />
          ))}
        </div>
      </div>

    </div>

    <div style={{marginTop: '15px'}}>
      <button type='button' className='custom__button'>See More</button>
    </div>

  </div>



)};

export default SpecialMenu;
