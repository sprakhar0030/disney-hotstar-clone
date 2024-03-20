import { useState, useEffect } from "react"; 
import logo from "../logo.png";
import './Header.scss';
import { CgProfile } from "react-icons/cg";
import { IoSearchOutline } from "react-icons/io5";
import { GoHomeFill } from "react-icons/go";
import { PiTelevisionSimple } from "react-icons/pi";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { TbCategoryPlus } from "react-icons/tb";
import { BiCameraMovie } from "react-icons/bi";
import { useLocation } from 'react-router-dom';
import { IoFlashOutline } from "react-icons/io5";
import { LiaDownloadSolid } from "react-icons/lia";

const Header = () => {

  const location = useLocation();
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    setIsHomePage(location.pathname === '/');
  }, [location.pathname]);

  return (
    <>
    <nav className="headerPc">
        <img src={logo} alt="" />
        <div className="icons">
            <CgProfile />
            <IoSearchOutline />
            {isHomePage ? (
              <GoHomeFill  style={{ color: 'white', transform : "Scale(1.2)" }} />
            ) : (
              <GoHomeFill  />
            )}
            <PiTelevisionSimple />
            <BiCameraMovie />
            <MdOutlineSportsSoccer />
            <TbCategoryPlus />
        </div>
        
    </nav>

    <nav className="headerMobile">
        <div className="iconsMobile">
            <div className="iconAndName">
              <GoHomeFill/>
              <h4>Home</h4>
            </div>
            <div className="iconAndName">
              <IoSearchOutline />
              <h4>Search</h4>
            </div>
            <div className="iconAndName">
              <IoFlashOutline />
              <h4>New & Hot</h4>
            </div>
            <div className="iconAndName">
              <LiaDownloadSolid />
              <h4>Downloads</h4>
            </div>
            <div className="iconAndName">
              <CgProfile />
              <h4>My Space</h4>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Header