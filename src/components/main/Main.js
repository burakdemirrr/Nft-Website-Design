import React from 'react'
import "./Main.css"
import video from "./bape_d_op (1).mp4"

const Main = () => {
  return (
    <div className='main'>
      <div className="img-container">
        <video    autoPlay loop muted   >
          <source src={video} type="video/mp4"/> 
          </video>  
      </div>
       
    </div>
  )
}

export default Main