import React, { useState, useEffect } from 'react';
import personService from '../services/persons';
import Search from './Search';
import List from './List';
import Form from './Form';
import Notification from './Notification';

const App = () => {
  const [ persons, setPersons ] = useState(null);
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ newSearch, setNewSearch ] = useState('');
  const [ notification, setNotification ] = useState(null);

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
      .catch(e => {
        setNotification({
          message: e.message,
          status: 'error'
        })
        setTimeout(() => {
          setNotification(null)
        }, 5000)
      })
  }, []);

  const handleNameChange = e => {
    setNewName(e.target.value)
  }

  const handleNumberChange = e => {
    setNewNumber(e.target.value)
  }

  const handleSearchChange = e => {
    setNewSearch(e.target.value.toLowerCase())
  }

  const handleDelete = id => {
    const deletedPerson = persons.find(person => person.id === id);

    if (window.confirm(`Delete ${deletedPerson.name}?`)) {
      personService.destroy(id)
        .then(() => {
          setPersons(persons.filter(person => person !== deletedPerson))
          setNotification({
            message: `Deleted ${deletedPerson.name}`,
            status: 'success'
          })
          setTimeout(() => {
            setNotification(null)
          }, 5000)
        })
        .catch(e => {
          setNotification({
            message: e.message,
            status: 'error'
          })
          setTimeout(() => {
            setNotification(null)
          }, 5000)
        })
    }
  }

  const personsToShow = newSearch 
    ? persons.filter(person => person.name.toLowerCase().indexOf(newSearch) !== -1)
    : persons;

  const handleSubmit = e => {
    e.preventDefault();
    const foundPerson = persons.find(person => person.name === newName);

    if (!foundPerson) {
      const newPerson = {
        name: newName, 
        number: newNumber,
      };
      personService.create(newPerson)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNotification({
            message: `Added ${returnedPerson.name}`,
            status: 'success'
          })
          setTimeout(() => {
            setNotification(null)
          }, 5000)
        })
        .catch(e => {
          setNotification({
            message: e.message,
            status: 'error'
          })
          setTimeout(() => {
            setNotification(null)
          }, 5000)
        })
    } else {
      const updatedPerson = {
        ...foundPerson,
        number: newNumber,
      };
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with (${newNumber})?`)) {
        personService.update(updatedPerson)
        .then(returnedPerson => {
          setPersons(persons.map(person => person.id === returnedPerson.id ? returnedPerson : person))
          setNotification({
            message: `Updated ${returnedPerson.name}`,
            status: 'success'
          })
          setTimeout(() => {
            setNotification(null)
          }, 5000)
        })
        .catch(e => {
          setNotification({
            message: e.message,
            status: 'error'
          })
          setTimeout(() => {
            setNotification(null)
          }, 5000)
        })
      }
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification notification={notification}></Notification>
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
