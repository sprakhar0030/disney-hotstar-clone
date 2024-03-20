import { useEffect, useState } from 'react';
import './Cards.scss';
import axios from 'axios';

const imageUrl = "https://image.tmdb.org/t/p/original";

const Card = ({img}) => <img src={img} alt="cover" />;

const apiKey = "014e0147a98a28d88a2cf28c480d78e3";
const url = "https://api.themoviedb.org/3/movie/";
const popular = "popular";


const PopularCards = () => {

    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
      const fetchupcoming = async()=> {
          const {data: { results}} = await axios.get(`${url}${popular}?api_key=${apiKey}`);
          // console.log(results);
          setPopularMovies(results);
      }
  
      fetchupcoming();
    },[popularMovies]);

  return (
    <div id='cardContainer'>
      <h1 className='cardsHeading'>Trending Now</h1>
      <div className='imgCard'>
        {popularMovies.map((movie, index) => (
              <Card key={index} img={`${imageUrl}/${movie.poster_path}`} />
            ))}
      </div>
    </div>
  )
}

export default PopularCards