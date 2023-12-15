import React from 'react'
import './Brands.css'
import { brandsData } from '../../Data/Data'


const Brands = () => {
    return (
        <div className='Brands'>
            <div className="container brands-container">

                {
                    brandsData.map(({ img }, index) => (
                        <div key={index} className="brand">
                            <img src={img} alt="brand" />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Brands