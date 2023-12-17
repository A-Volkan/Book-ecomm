import React from 'react'
import './PopularBooks.css'

import TitileTypeOne from '../../UI/TitileTypeOne/TitileTypeOne'

import { galleryData } from '../../Data/Data'

import { useState } from 'react'



function PopularBooks() {

    const [activeButton, setActiveButton] = useState('All');


    const handleFilterChange = (category) => {

        setActiveButton(category);
    }

    const filterItems = activeButton === 'All' ? galleryData : galleryData.
        filter((item) => item.category === activeButton);





    return (
        <section>
            <div className="container popularbooks-container">
                <TitileTypeOne TitleTop={'Some quality items'} title={'Popular Books'} className="popularbooks-title" />

                <div className="filter-buttons">
                    <button className={activeButton === 'All' ? 'active' : ''}
                        onClick={() => handleFilterChange('All')}
                    >
                        All
                    </button>
                    <button className={activeButton === 'All' ? 'active' : ''}
                        onClick={() => handleFilterChange('Business')} >
                        Business
                    </button>
                    <button className={activeButton === 'All' ? 'active' : ''}
                        onClick={() => handleFilterChange('Technology')}>
                        Technology
                    </button>
                    <button className={activeButton === 'All' ? 'active' : ''}
                        onClick={() => handleFilterChange('Adventure')}>
                        Adventure
                    </button>
                    <button className={activeButton === 'All' ? 'active' : ''}
                        onClick={() => handleFilterChange('Romance')}>
                        Romance
                    </button>
                    <button className={activeButton === 'All' ? 'active' : ''}
                        onClick={() => handleFilterChange('Fictional')}>
                        Fictional
                    </button>
                </div>

                <div className="gallery">
                    {filterItems.map(({ name, writer, price, image }, index) => (
                        <div className="gallery-item" key={index}>
                            <div className='popularbook-image'><img src={image} alt="book" /></div>
                            <div className="popularbook-info">
                                <h4>{name}</h4>
                                <div><small>{writer}</small></div>
                                <h5><span>{price}</span></h5>
                            </div>



                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PopularBooks