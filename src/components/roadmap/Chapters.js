import React from 'react'
import "./Roadmap.css"

const Chapters = ({title,text}) => {
  return (
    <div className='chapters'>
        <div className="title">
            <p>{title}</p>
        </div>
        <div className="text">
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Chapters