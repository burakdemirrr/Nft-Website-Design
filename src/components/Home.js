import React from 'react'
import Main from './main/Main'
import Navbar from './navbar/Navbar'
import "./Home.css"
import About from './about/About'
import Roadmap from './roadmap/Roadmap'
import Team from './team/Team'
import Faq from './faq/Faq'
const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <Main/>
        <About/>
        <Roadmap/>
        <Team/>
        <Faq/>
    </div>
  )
}

export default Home