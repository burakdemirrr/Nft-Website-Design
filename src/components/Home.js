import React from 'react'
import Main from './main/Main'
import Navbar from './navbar/Navbar'
import "./Home.css"
import About from './about/About'
import Roadmap from './roadmap/Roadmap'
import Team from './team/Team'
const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <Main/>
        <About/>
        <Roadmap/>
        <Team/>
    </div>
  )
}

export default Home