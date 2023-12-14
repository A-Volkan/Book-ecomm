import React from 'react';
import './Header.css';
import { headerBooks } from '../../Data/Data';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import { GoArrowRight } from 'react-icons/go'
import { GoArrowLeft } from 'react-icons/go'

import headerShape from '../../assets/header-shape.svg'





function Header() {
    return (
        <header>
            <div className="header-container">

                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                    modules={[Navigation, Pagination]}
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    navigation={
                        {
                            preEl: '.button-prev-slide',
                            nextEl: '.button-next-slide'
                        }
                    }

                >
                    {headerBooks.map(({ tittle, info, img, btnLink }, index) => (
                        <SwiperSlide key={index}>
                            <div className="header-wrapper container">
                                <div className="header-left">
                                    <h1>
                                        {tittle}</h1>
                                    <p dangerouslySetInnerHTML={{ __html: info }}></p>
                                    <a href={btnLink} className='btn btn-border'>learn more</a>

                                </div>
                                <div className="header-right">
                                    <img src={img} alt="header" />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="slider-button">
                        <div className="button-prev-slide slidebutton"><GoArrowLeft /></div>
                        <div className="button-next-slide slidebutton"><GoArrowRight /></div>
                    </div>
                    <div className="container">
                        <div className="swiper-pagination"></div>
                    </div>
                </Swiper>
                <div className="header-shape">
                    <img src={headerShape} alt="" />
                </div>
            </div>
        </header>
    );
}
export default Header