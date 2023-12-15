import React from 'react'
import './FeaturesBooks.css'

import TitileTypeOne from '../../UI/TitileTypeOne/TitileTypeOne'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import { featuredBooksData } from '../../Data/Data'
import { Link } from 'react-router-dom';


import { BsArrowReturnRight } from 'react-icons/bs';


// Swiper Breakpoints
const breakpoints = {
    1024: {
        slidesPerView: 4,
        spaceBetweenSlides: 150
    },
    768: {
        slidesPerView: 3,
        spaceBetweenSlides: 200
    },
    480: {
        slidesPerView: 2,
        spaceBetweenSlides: 200
    },
    0: {
        slidesPerView: 1,
        spaceBetweenSlides: 0
    }

}

const FeaturesBooks = () => {
    return (
        <section className="featured">
            <div className="container featurers-book-container">
                <TitileTypeOne TitleTop={'Some quality items'} title={'Featured Books'} />

                <Swiper
                    spaceBetween={50}
                    slidesPerView={4}
                    loop={true}
                    modules={[Pagination]}
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    breakpoints={breakpoints}
                >
                    {featuredBooksData.map(({ img, imgLink, name, nameLink, writer, pricer }, index) => (
                        <SwiperSlide key={index}>
                            <div className="featurebook-box">
                                <Link to={imgLink} className='featurebook'><img src={img} alt="book" /></Link>
                                <div className="featurebook-info">
                                    <Link to={nameLink}><h4>{name}</h4></Link>
                                    <div><small>{writer}</small></div>
                                    <h5><span>{pricer}</span></h5>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}

                    <div className="feature-border container"></div>

                    <div className="swiper-pagination" > </div>

                    <Link to="*" className='btn feature-btn'>View All Products
                        <BsArrowReturnRight /></Link>
                </Swiper>
            </div>
        </section>
    )
}

export default FeaturesBooks