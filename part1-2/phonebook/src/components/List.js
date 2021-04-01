import React from 'react';

const List = ({ persons }) => {
  return (
    <div>
      <h2>Numbers</h2>
      {persons.map(person =>
        <p key={person.id}>{person.name} {person.number}</p>
      )}
    </div>
  )
}

export default List;