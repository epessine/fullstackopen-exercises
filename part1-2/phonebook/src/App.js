import React, { useState } from 'react';

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ newSearch, setNewSearch ] = useState('');

  const handleNameChange = e => {
    setNewName(e.target.value);
  }

  const handleNumberChange = e => {
    setNewNumber(e.target.value);
  }

  const handleSearchChange = e => {
    setNewSearch(e.target.value.toLowerCase());
  }

  const personsToShow = newSearch 
    ? persons.filter(person => person.name.toLowerCase().indexOf(newSearch) !== -1)
    : persons;

  const handleSubmit = e => {
    e.preventDefault();
    const hasName = persons.find(person => person.name === newName);
    if (!hasName) {
      setPersons(persons.concat({ name: newName, number: newNumber }));
    } else {
      alert(`${newName} is already added to phonebook!`)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
          filter shown with<input value={newSearch} onChange={handleSearchChange} />
        </div>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
            number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {personsToShow.map(person =>
        <p>{person.name} {person.number}</p>
      )}
    </div>
  )
}

export default App;
