import React from 'react'
import './BestSellingBook.css'

import TitileTypeTwo from '../../UI/TitileTypeOne/TitileTypeTwo/TitileTypeTwo'

import TreeShape from '../../Assets/treeShape.png'

import { sellingBooksData } from '../../Data/Data'

import { BsArrowRight } from 'react-icons/bs'

import { Link } from 'react-router-dom'


function BestSellingBook() {
    return (
        <section className='BestSellingBook'>
            <div className="treeShape">
                <img src={TreeShape} alt="treeShape" />
            </div>




            {
                sellingBooksData.map(({ img, infoTitle, desc, shopbtnLink, infoTitleTop, price }, index) => {
                    return (
                        <div className="container bestselling-container" key={index}>
                            <div className="selling-book-left">
                                <img src={img} alt="book" />
                            </div>
                            <div className="selling-book-right">
                                <TitileTypeTwo Title={'Best Selling Books'} className="sellingBookTitle" />
                                <div><small>{infoTitleTop}</small></div>
                                <h3>{infoTitle}</h3>
                                <p>{desc}</p>
                                <h5><span>{price}</span></h5>
                                <Link to={shopbtnLink} className='btn'>
                                    <small>Shop Now</small>
                                    <BsArrowRight />
                                </Link>
                            </div>
                        </div>
                    );
                })
            }




        </section >
    )
}

export default BestSellingBook;