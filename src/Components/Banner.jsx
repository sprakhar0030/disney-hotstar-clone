import banner from '../bannerVideo.mp4';
import mobileBanner from '../mobileBanner.png';
import './Banner.scss';
import { FaPlay } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import logo from "../logo.png";

const Banner = () => {

  return (
    <div id='banner'>
        <video autoPlay muted id='videoRender'>
          <source src={banner} type='video/mp4' />
        </video>
        <img id='logoMobile' src={logo} alt="" />
        <img src={mobileBanner} alt="error" id='imageRender'/>
        <div id='bannerDetails'>
          <h1 id='bannerTitle'>AARYA</h1>
          <div>
          <ul id='extralDetails'>
            <li id='first'>2024</li>
            <li>3 Seasons</li>
            <li>7 Languages</li>
            <li id='rating'><span>U/A 16+</span></li>
          </ul>
          </div>
          <p id="bannerDescription">PART 2 - ANTIM VAAR OUT. The Sherni is back again, and she is all set to end it all. Will she succeed?</p>
          <p id="bannerGenre">Drama | Thriller | Mystery | Crime</p>
          <div id='buttons'>
            <button id="bannerPlayButton"><FaPlay /><span>Watch Now</span></button>
            <FaPlus id='addTo'/>
          </div>
        </div>

        <div id='bannerDetailsMobile'>
          <h1 id='bannerTitleMobile'>AARYA</h1>
          <div id='genreMobile'>
          <ul id='bannerGenreMobile'>
            <li id='firstMobile'>2024</li>
            <li>Thriller</li>
            <li>Mystery</li>
            <li>Crime</li>
          </ul>
          </div>
          <div id='buttonsMobile'>
            <button id="bannerPlayButtonMobile"><FaPlay /><span>Subscribe to Watch</span></button>
            <button id='addToMobile'><FaPlus /></button>
          </div>
        </div>
    </div>
  )
}

export default Banner