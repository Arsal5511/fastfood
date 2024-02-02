import React from 'react';
import { images, data } from '../../constants';
import { SubHeading} from '../../components';
import './Laurels.css';

const AwardCard = ({award: {imgUrl, title, subtitle}}) => (
  <div className="awardCard">
    <img src={imgUrl} alt="awards" />
    <div className="awardCard_content">
      <p className='p__cormorant' style={{color: '#DCCA87'}}>{title}</p>
      <p className='p__cormorant' >{subtitle}</p>
    </div>
  </div>
)
const Laurels = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_info">
      <SubHeading title="Awards & Recognitions" />
      <h1 className='headtext__cormorant'>Our Laurels</h1>

      <div  className='app_laurel_award'>
        {data.awards.map((award)=> <AwardCard award={award} key={award.title}   />)}</div>

    </div>
    <div className='app__wrapper_img'>
      <img src={images.laurels} alt="laurels" />
    </div>
  </div>
);

export default Laurels;
