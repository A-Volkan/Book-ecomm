import React from 'react'
import './TitileTypeTwo.css'

import victor from '../../../assets/victor.png'

function TitileTypeTwo({ ClassName, Title }) {
    return (
        <div className={`TitleTypeTwo ${ClassName}`}>
            <h2>{Title}</h2>
            <img src={victor} alt="victor" className='victor' />
        </div>
    )
}

export default TitileTypeTwo