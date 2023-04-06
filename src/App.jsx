import React, { useState } from 'react';
import Questions from './Questions';
import QandA from './data';

const App = () => {
const [questions, setQuestions] = useState(QandA);

  return (
    <main>
      <Questions questions= {questions} />
    </main>
  )
}

export default App