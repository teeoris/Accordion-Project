import React, { useState } from 'react'
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';

const SingleQuestion = ({title, info}) => {
  const [showInfo, setShowInfo] = useState(false);
  const toggleBtn = ()=> {
    setShowInfo(!showInfo)
  }

  return (
    <article className='singleQus'>
      <header>
        <h4>{title}</h4>
        <button onClick={toggleBtn}>
          {showInfo ? <AiFillMinusCircle/> : <AiFillPlusCircle />}
        </button>
      </header>
      <div className='singleQus-info'>
        {showInfo && <p>{info}</p>}
      </div>
    </article>
  )
}

export default SingleQuestion