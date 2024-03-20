import { useEffect, useState } from 'react';
import './Cards.scss';
import axios from 'axios';


const imageUrl = "https://image.tmdb.org/t/p/original";

const Card = ({img}) => <img src={img} alt="cover" />;

const apiKey = "014e0147a98a28d88a2cf28c480d78e3";
const url = "https://api.themoviedb.org/3/tv/";
const topRated = "top_rated";

const TopRatedCards = () => {

  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    const fetchupcoming = async()=> {
        const {data: { results}} = await axios.get(`${url}${topRated}?api_key=${apiKey}`);
        // console.log(results);
        setTopRatedMovies(results);
        // console.log(popularMovies)
    }

    fetchupcoming();
  },[topRatedMovies]);
  return (
    <div id='cardContainer'>
      <h1 className='cardsHeading'>Popular TV Shows</h1>
      <div className='imgCard'>
          {topRatedMovies.map((movie, index) => (
              <Card key={index} img={`${imageUrl}/${movie.poster_path}`} />
          ))}
      </div>
    </div>
  )
}
// background: linear-gradient( to bottom, transparent 5px, rgb(0, 0, 0) 100px);

export default TopRatedCards