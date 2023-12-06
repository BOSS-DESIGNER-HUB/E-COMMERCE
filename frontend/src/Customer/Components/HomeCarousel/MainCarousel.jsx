import React from 'react'
import {MainCarouselData} from "./MainCarouselData"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const MainCarousel = () => {
const maindata = MainCarouselData.map((item) => <img src={item.image} alt="" className='cursor-pointer -z-10' role='Presentation' />)
  return (
    <div>
          <AliceCarousel
              mouseTracking
              items={maindata}
              disableButtonsControls
              autoPlay
              autoPlayInterval={1200}
              infinite
          />
    </div>
  )
}

export default MainCarousel