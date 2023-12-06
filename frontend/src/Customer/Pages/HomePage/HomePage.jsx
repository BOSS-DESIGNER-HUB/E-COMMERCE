import React from 'react'
import MainCarousel from '../../Components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../Components/HomeSectionCarousel/HomeSectionCarousel'
import { mens_kurta } from '../../../Data/kurta-data'

const HomePage = () => {
    return (
        <div>
            <MainCarousel />
            <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
                <HomeSectionCarousel data={mens_kurta} sectionName={"Fabrics"}/>
                <HomeSectionCarousel data={mens_kurta} sectionName={"3&2-Piece Suit's"}/>
                <HomeSectionCarousel data={mens_kurta} sectionName={" Sherwani "}/>
                <HomeSectionCarousel data={mens_kurta} sectionName={" Kurta Paizma"}/>
                <HomeSectionCarousel data={mens_kurta} sectionName={" Indo Westren"}/>
                <HomeSectionCarousel data={mens_kurta} sectionName={" Jodhpuri"}/>
            </div>
        </div>
    )
}

export default HomePage