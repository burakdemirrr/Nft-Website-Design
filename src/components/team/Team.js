import React from 'react'
import "./Team.css"
const Team = () => {
  return (
    <div className='team'>
        <h1>TEAM</h1>
        <div className="cards">
            <div className="card card1">
                <h3>Burak Demir</h3>
                <p>Front-End Developer</p>
            </div>
            <div className="card card2">
                <h3>Kerim Baran</h3>
                <p>Marketing Specialist</p>
            </div>
            <div className="card card3">
                <h3>Buse Karakullukcu</h3>
                <p>Designer</p>
            </div>
        </div>
        <div className="cards">
            <div className="card card4">
                <h3>Berkay Uygun</h3>
                <p>Back-End Developer</p>
            </div>
            <div className="card card5">
                <h3>Sevval Demir</h3>
                <p>Mental Support</p>
            </div>
            <div className="card card6">
                <h3>Emre Elbir</h3>
                <p>Discord Moderator</p>
            </div>
        </div>
    </div>
  )
}

export default Team