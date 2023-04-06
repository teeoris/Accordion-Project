import React from 'react';
import SingleQuestion from './SingleQuestion';

const questions = ({questions}) => {
  return (
    <section className='container'>
        <div className='title'>
          <h2>Questions</h2>
          <span></span>
        </div>
        {questions.map((qus)=>{
            return <SingleQuestion key={qus.id} {...qus} />
        })}
    </section>
  )
}

export default questions