import React from 'react';

const Header = (props) => {
  return (
    <div>
      <h1>{props.content.name}</h1>
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part.name} {props.part.exercise}
      </p>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part part={props.content.parts[0]} />
      <Part part={props.content.parts[1]} />
      <Part part={props.content.parts[2]} />
    </div>
  );
};

const Total = (props) => {
  let total = 0;
  props.content.parts.forEach(part => {
    total += part.exercise
  });

  return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
  );
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercise: 10
      },
      {
        name: 'Using props to pass data',
        exercise: 7
      },
      {
        name: 'State of a component',
        exercise: 14
      },
    ]
  }

  return (
    <div>
      <Header content={course} />
      <Content content={course} />
      <Total content={course} />
    </div>
  );
};

export default App;
