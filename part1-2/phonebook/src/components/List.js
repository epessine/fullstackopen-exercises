import React from 'react';

const List = ({ persons, handleDelete }) => {
  if (!persons) {
    return null
  }
  
  return (
    <div>
      <h2>Numbers</h2>
      {persons.map(person =>
        <p key={person.id}>{person.name} {person.number} <button onClick={() => handleDelete(person.id)}>delete</button></p>
      )}
    </div>
  )
}

export default List;