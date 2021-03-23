import React, { useState } from 'react';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = (good + neutral + bad);
  const average = '';
  const percent = (good / total) * 100;
  const title = "give feedback";

  return (
    <div>
      <Header title={title} />
      <Button text={"good"} handleClick={() => setGood(good + 1)} />
      <Button text={"neutral"} handleClick={() => setNeutral(neutral + 1)} />
      <Button text={"bad"} handleClick={() => setBad(bad + 1)} />
      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        percent={percent + " %"}
      />
    </div>
  );
}

const Header = ({ title }) => {
  return (
    <h1>
      {title}
    </h1>
  );
}

const Button = ({ text, handleClick }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  );
}

const Statistics = ({ good, neutral, bad, total, average, percent }) => {
  if (!good && !neutral && !bad) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <h1>statistics</h1>
      <Statistic name={'good'} count={good} />
      <Statistic name={'neutral'} count={neutral} />
      <Statistic name={'bad'} count={bad} />
      <Statistic name={'total'} count={total} />
      <Statistic name={'average'} count={average} />
      <Statistic name={'percent'} count={percent} />
    </div>
  )
}

const Statistic = ({ name, count }) => {
  return (
    <p>{ name } { count }</p>
  )
}

export default App;