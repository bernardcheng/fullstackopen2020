import React, { useState, useEffect } from 'react'
import ViewPeople from './components/view_people'
import AddPeople from './components/add_people'
import SearchFilter from './components/search_filter'
import axios from 'axios';

const App = () => {
  const [ records, setRecords ] = useState([]);

  const hook = () => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('Sucessful')
        // console.log(response.data)
        setRecords(response.data)
      })
  };

  useEffect(hook, []);
  
  const [ persons, setPersons] = useState(records)
  const [ newName, setNewName ] = useState('')
  const [ newNum, setNewNum ] = useState('')
  const [ filterName, setFilterName ] = useState('')
  const [ filterPersons, setFilterPersons ] = useState(persons)  
  
  console.log('records: ',records)
  console.log('persons: ',persons)

  const addPerson = (event) => {
    event.preventDefault()
    const PersonObject = {
      name: newName,
      number: newNum
    }
    if (persons.filter(person => person.name === newName).length === 0) {
        setPersons(persons.concat(PersonObject))
        setNewName('')
        setNewNum('')
    } else {
        // console.log(persons.filter(person => person.name === newName).length)
        window.alert(`${newName} is already added to phonebook`);
        }
    }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumChange = (event) => {
    console.log(event.target.value)
    setNewNum(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilterName(event.target.value)

    const matching_list = persons.filter(person => person.name.toUpperCase().includes(filterName.toUpperCase()))

    if (matching_list.length >= 0) {
        setFilterPersons(matching_list)
    } else {
        setFilterPersons(persons)
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <SearchFilter filterName={filterName} handleFilterChange={handleFilterChange}/>
      <h2>add a new</h2>
      <AddPeople newName={newName} newNum={newNum} addPerson={addPerson} handleNameChange={handleNameChange} handleNumChange={handleNumChange}/>
      <h2>Numbers</h2>
      <ViewPeople filterPersons={filterPersons}/>
    </div>
  )
}

export default App