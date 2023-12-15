import React from 'react'
import './TitileTypeOne.css'

import victor from '../../assets/victor.png'

function TitileTypeOne({ ClassName, Title, TitleTop }) {
    return (
        <div className={`TitleTypeOne ${ClassName}`}>
            <small>{TitleTop}</small>
            <div className='headeing-H'>
                <div className="line"></div>
                <h2>{Title}</h2>
                <div className="line"></div>
            </div>
            <img src={victor} alt="victor" className='victor' />
        </div>
    )
}

export default TitileTypeOne