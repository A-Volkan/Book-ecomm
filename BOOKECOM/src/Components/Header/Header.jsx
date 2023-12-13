import React from 'react';
import './Header.css';
import { headerBooks } from '../../Data/Data';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';





import { Link } from 'react-router-dom'


function Header() {
    return (
        <header>
            <div className="header-container">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    modules={[Pagination, Navigation]}
                    pagination={{ el: '.swiper-pagination', clickable: true }}
                    navigation
                    loop={true}
                >
                    {headerBooks.map(({ tittle, info, img, btnLink }, index) => (
                        <SwiperSlide key={index}>
                            <div className="header-wrapper container">
                                <div className="header-left">
                                    <h1>
                                        {tittle}
                                        <p dangerouslySetInnerHTML={{ __html: info }}></p>
                                        <Link className='btn btn-border' to={btnLink} target='_blank'>Learn more</Link>
                                    </h1>
                                </div>
                                <div className="header-right">
                                    <img src={img} alt="header" />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="container">
                        <div className="swiper-pagination"></div>
                    </div>
                </Swiper>
            </div>
        </header>
    );
}
export default Header