import React from 'react'
import Header from '../Components/Header/Header'
import Brands from '../Components/Brands/Brands'
import FeaturesBooks from '../Components/FeaturesBooks/FeaturesBooks'
import BestSellingBook from '../Components/BestSellingBook/BestSellingBook'

const Home = () => {
    return (
        <>
            <Header />
            <Brands />
            <FeaturesBooks />
            <BestSellingBook />
        </>
    )
}

export default Home