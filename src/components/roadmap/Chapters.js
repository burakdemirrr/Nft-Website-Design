import React from 'react'
import "./Roadmap.css"

const Chapters = ({tetle,text}) => {
  return (
    <div className='chapters'>
        <div className="tetle">
            <p>{tetle}</p>
        </div>
        <div className="text">
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Chapters