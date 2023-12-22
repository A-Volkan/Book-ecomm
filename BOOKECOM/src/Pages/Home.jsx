import React from 'react'
import Header from '../Components/Header/Header'
import Brands from '../Components/Brands/Brands'
import FeaturesBooks from '../Components/FeaturesBooks/FeaturesBooks'
import BestSellingBook from '../Components/BestSellingBook/BestSellingBook'
import PopularBooks from '../Components/PopularBooks/PopularBooks'
import LatestArticle from '../Components/LatestArticle/LatestArticle'
import Quote from '../Components/Quote/Quote'

const Home = () => {
    return (
        <>
            <Header />
            <Brands />
            <FeaturesBooks />
            <BestSellingBook />
            <PopularBooks />
            <Quote />
            <LatestArticle />

        </>
    )
}

export default Home