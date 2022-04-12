import React, { useEffect, useState } from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import "./navbar.css"
function Navbar() {
  const [active, setActive] = useState(true);
  const [toggleIcon, setToggleIcon] = useState(true);
  const [navbar, setNavbar] = useState(false);


  const changeBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 0) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })


  return (
    <div className={navbar ? `navbar navbar_active` : `navbar`} >
      <div className="logo">
        <h3>IcApes.</h3>
      </div>
      <div className={toggleIcon ? `nav__toggler` : `nav__toggler toggle`} onClick={() => { setActive(!active); setToggleIcon(!toggleIcon) }}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <ul className={active ? `mobile-nav` : "mobile-nav nav__active"} onClick={() => { setActive(!active); setToggleIcon(!toggleIcon) }}>
        <li className='nav__item'><a href="#">Home</a></li>
        <li className='nav__item'><a href="#about">About</a></li>
        <li className='nav__item'><a href="#roadmap">Roadmap</a></li>
        <li className='nav__item'><a href="#team">Team</a></li>
        <li className='nav__item'><a href="#faq">FAQ</a></li>
      </ul>
      <div className="right">
        <a href="#navbar"><GitHubIcon className='icon' /></a>
        <a href="#navbar"><FacebookIcon className='icon' /></a>
        <a href="#navbar"><TwitterIcon className='icon' /></a>
      </div>

    </div>
  )
}

export default Navbar