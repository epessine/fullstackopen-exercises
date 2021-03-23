import React, { useState } from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const title = "give feedback";

  return (
    <div>
      <Header title={ title } />
      <Button text={"good"} handleClick={() => setGood(good + 1)} />
      <Button text={"neutral"} handleClick={() => setNeutral(neutral + 1)} />
      <Button text={"bad"} handleClick={() => setBad(bad + 1)} />
      <Statistics good={ good } neutral={ neutral } bad={ bad } />
    </div>
  );
};

const Header = ({ title }) => {
  return (
    <h1>
      { title }
    </h1>
  );
};

const Button = ({ text, handleClick }) => {
  return (
    <button onClick={handleClick}>
      { text }
    </button>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  return (
    <div>
      <h1>statistics</h1>
      <p>good { good }</p>
      <p>neutral { neutral }</p>
      <p>bad { bad }</p>
    </div>
  )
}

export default App;