import React, { useRef } from 'react';
import {BsInstagram, BsArrowLeftShort,BsArrowRightShort } from 'react-icons/bs'
import {SubHeading} from '../../components'
import { images } from '../../constants';
import './Gallery.css';

const Gallery = () => {
 const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if(direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }

  const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04, images.gallery01, images.gallery03]

  return(
  <div className='app_gallery flex__center'>
    <div className='app_gallery_content'>
      <SubHeading title='instagram' />
      <h1 className='headtext__cormorant'>Photo Gallerty</h1>
      <p  className='p__opensans' style={{color:'#AAA', marginTop:'2rem' }} >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae odit incidunt, repellat cum in dicta ab doloribus dolor sit hic culpa modi fugit praesentium maxime quia ut obcaecati voluptatibus rerum.</p>
      <button type='button' className='custom__button'>view More</button>
    </div>

    <div className="app_gallery_images">
      <div className='app_gallery_container' ref={scrollRef}>
        {galleryImages.map((image, index)=>(
          <div className="app_gallery_image_card flex__center" key={`gallery_image-${index+1}`}>
            <img src={image} alt="gallery" />
            <BsInstagram className='gallery_image_icon' />
          </div>
        ))}
      </div>
      <div className='app_gallery_arrows'>
        <BsArrowLeftShort className='gallery_arrow_icon' onClick={()=> scroll('left')} />
        <BsArrowRightShort className='gallery_arrow_icon' onClick={()=> scroll('right')} />

      </div>
    </div>
  </div>
)};

export default Gallery;
