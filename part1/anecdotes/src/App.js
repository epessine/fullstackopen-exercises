import React, { useState } from 'react';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ];
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0]);
  const mostVoted = votes.indexOf(Math.max(...votes));

  const randomAnecdote = () => {
    setSelected(Math.floor(Math.random() * (anecdotes.length)))
  }

  const addVote = () => {
    const copy = [...votes];
    copy[selected]++;
    setVotes(copy);
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdotes={anecdotes} selected={selected} votes={votes} />
      <Button text={'vote'} handleClick={addVote} />
      <Button text={'next anecdote'} handleClick={randomAnecdote} />
      <h1>Anecdote with most votes</h1>
      <Anecdote anecdotes={anecdotes} selected={mostVoted} votes={votes} />
    </div>
  )
}

const Anecdote = ({ anecdotes, selected, votes }) => {
  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes</p>
    </div>
  )
}

const Button = ({ text, handleClick }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

export default App;
