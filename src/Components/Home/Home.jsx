import React from 'react'
import './Home.css'

// image 
import IMG from '../../Assets/image.png'

// social-media-icon
import { FaTwitter } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";


// Navigationbar
import { IoHome } from "react-icons/io5";
import { MdMedicalServices } from "react-icons/md";
import { FaPortrait } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";

const Home = () => {
  return (
    <>
     <div className="home">
      <div className="home-content">
        <h3>Hello, It's Me.</h3>
        <h1>Sanjana Chauhan</h1>
        <h2>And I'm a <span>Frontend Developer</span></h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod dignissimos iusto unde odio nulla expedita sed ipsum. Iure ex excepturi aut aperiam. Eum, recusandae modi repudiandae vitae in esse consectetur?</p>
        <div className="social-media">
          <li><a href='#'><FaTwitter /></a></li>
          <li><a href='#'><CiLinkedin /></a></li>
          <li><a href='#'><FaFacebookF /></a></li>
          <li><a href='#'><GrInstagram /></a></li>
        </div>
        <div className="button">
          <button className='btn'>Download CV</button>
          <button className='btn'>Hire Me</button>
        </div>
      </div>
      <div className="image">  
        <img src={IMG} alt='Portfolio-Image' />
      </div>
      <navigation>
        <li><a className='active' href='#'><IoHome /></a></li>
        <li><a href='#'><MdMedicalServices /></a></li>
        <li><a href='#'><FaPortrait /></a></li>
        <li><a href='#'><RiContactsFill /></a></li>
      </navigation>
     </div>
    </>
  )
}

export default Home
