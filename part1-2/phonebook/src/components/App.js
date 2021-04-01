import React, { useState, useEffect } from 'react';
import personService from '../services/persons';
import Search from './Search';
import List from './List';
import Form from './Form';

const App = () => {
  const [ persons, setPersons ] = useState([]);
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ newSearch, setNewSearch ] = useState('');

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
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

  const handleDelete = id => {
    const deletedPerson = persons.find(person => person.id === id);
    if (window.confirm(`Delete ${deletedPerson.name}?`)) {
      personService.destroy(id)
        .then(() => {
          setPersons(persons.filter(person => person !== deletedPerson))
        })
        .catch(e => {
          console.log(e);
        })
    }
  }

  const personsToShow = newSearch 
    ? persons.filter(person => person.name.toLowerCase().indexOf(newSearch) !== -1)
    : persons;

  const handleSubmit = e => {
    e.preventDefault();
    const hasName = persons.find(person => person.name === newName);
    if (!hasName) {
      const newPerson = {
        name: newName, 
        number: newNumber,
      };
      personService.create(newPerson)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
        })
        .catch(e => {
          console.log(e);
        })
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
      <List persons={personsToShow} handleDelete={handleDelete}></List>
    </div>
  )
}

export default App;
