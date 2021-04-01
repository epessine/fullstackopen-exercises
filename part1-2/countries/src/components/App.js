import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './Search';
import Result from './Result';
import Weather from './Weather';

function App() {
  const [ countries, setCountries ] = useState([]);
  const [ filter, setFilter ] = useState([]);
  const [ capital, setCapital ] = useState('');

  let results = [];

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(res => {
        setCountries(res.data)
      })
  }, []);

  const handleFilterChange = (e) => {
    setFilter(e.target.value.toLowerCase())
  }

  const filteredCountries = filter
    ? countries.filter(country => country.name.toLowerCase().indexOf(filter) !== -1)
    : countries;
  
  if (filteredCountries.length > 10) {
    results = ['Too many matches, specify another filter'];
  } else if (filteredCountries.length > 0) {
    results = filteredCountries;
  } else {
    results = ['No results, specify another filter'];
  }

  return (
    <div>
      <Search 
        filter={filter} 
        handler={handleFilterChange}
      ></Search>
      <Result
        countries={filteredCountries}
        results={results}
        setFilter={setFilter}
        setCapital={setCapital}
      ></Result>
      <Weather capital={capital}></Weather>
    </div>
  );
}

export default App;
