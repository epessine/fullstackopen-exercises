import React from 'react';

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <p>
        {props.item.part} {props.item.exercise}
      </p>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part item={props.content[0]} />
      <Part item={props.content[1]} />
      <Part item={props.content[2]} />
    </div>
  );
};

const Total = (props) => {
  let total = 0;
  props.content.forEach(part => {
    total += part.exercise
  });

  return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
  );
};

const App = () => {
  const course = 'Half Stack application development';
  const content = [
    {
      part: 'Fundamentals of React',
      exercise: 10
    },
    {
      part: 'Using props to pass data',
      exercise: 7
    },
    {
      part: 'State of a component',
      exercise: 14
    },
  ];

  return (
    <div>
      <Header course={course} />
      <Content content={content} />
      <Total content={content} />
    </div>
  );
};

export default App;
