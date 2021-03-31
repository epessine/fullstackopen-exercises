import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './Search';
import List from './List';
import Form from './Form';

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

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, []);

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
      <Search value={newSearch} handler={handleSearchChange}></Search>
      <Form 
        handlers={[handleSubmit, handleNameChange, handleNumberChange]}
        values={[newName, newNumber]}
      >
      </Form>
      <List persons={personsToShow}></List>
    </div>
  )
}

export default App;
