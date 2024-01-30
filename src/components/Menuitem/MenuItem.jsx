import React from 'react';

import './MenuItem.css';

const MenuItem = ({title, price, tags}) => (
  <div className='menuItme'>

      <div className="menuItem_head">

            <div className="menuItem_name">
              <p className="p__cormorant" style={{color:'#DCCA87'}}>{title}</p>
            </div>

            <div className="menuItem_dash"></div>

            <div className="menuItem_price">
              <p className="p__cormorant" >{price}</p>
            </div>

      </div>

      <div className="menuItem_sub">
        <p className="p__opensans" style={{color:'#AAA'}} >{tags}</p>
      </div>
    
  </div>
);

export default MenuItem;
