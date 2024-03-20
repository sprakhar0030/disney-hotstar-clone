import React from 'react'
import PopularCards from './PopularCards'
import TopRatedCards from './TopRatedCards'
import './Cards.scss';

const Cards = () => {
  return (
    <div id='cardStack'>
        <PopularCards/>
        <TopRatedCards/>
    </div>
  )
}

export default Cards