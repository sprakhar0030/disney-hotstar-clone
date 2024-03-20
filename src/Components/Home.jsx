import React from 'react'
import Header from './Header';
import Banner from './Banner';
import Cards from './Cards';

// import './Home.scss';
// import axios from 'axios';


// const apiKey = "014e0147a98a28d88a2cf28c480d78e3";
// const url = "https://api.themoviedb.org/3/movie/";
// const popular = "popular";


const Home = () => {

  return (
    <>
        <Header/>
        <Banner/>
        <Cards/>
    </>
    
  )
}

export default Home