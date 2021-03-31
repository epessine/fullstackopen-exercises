import React, { useState } from 'react';

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]);
  const [ newName, setNewName ] = useState('');

  const handleNameChange = e => {
    setNewName(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    const hasName = persons.find(person => person.name === newName);
    if (!hasName) {
      setPersons(persons.concat({ name: newName }));
    } else {
      alert(`${newName} is already added to phonebook!`)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person =>
        <p>{person.name}</p>
      )}
    </div>
  )
}

export default App;
