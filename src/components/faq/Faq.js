import React, { useState } from 'react'
import "./Faq.css"
const Faq = ({question,answer}) => {
  const [active,setActive]=useState(false);
  return (
    <section>
        <div className={active ? `faq active` :"faq"} onClick={()=>setActive(!active)}>
          <div className="question">
            <h3>{question}</h3>
            <svg width={15} height={10} viewBox="0 0 42 25">
              <path d='M3 3L21 21L39 3' stroke='white' strokeWidth={7} strokeLinecap="round"/>
            </svg>
          </div>
          <div className="answer">
            <p>{answer}</p>
          </div>
          
        </div>
    </section>
  )
}

export default Faq