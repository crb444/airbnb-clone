import React from 'react'
import Header from './Header'
import Banner from './Banner'
import SearchDates from './SearchDates'
import Card from './Card'
import Footer from './Footer'
import './Home.css'
import {cardSection1, cardSection2} from './data.js'

const Home = () => {
    return (
        <div className="home">
           
            <SearchDates/>
            <Banner/>
            <div className="home__cardSection1">
                {cardSection1.map(data => {
                    return (
                        <Card url={data.url} title={data.title} description={data.description}/>
                    )
                })}
                
            </div>
            <div className="home__cardSection2">
            {cardSection2.map(data => {
                    return (
                        <Card url={data.url} title={data.title} description={data.description} price={data.price}/>
                    )
                })}
            </div>
           
        </div>
    )
}

export default Home; 