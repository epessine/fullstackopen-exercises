import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [ countries, setCountries ] = useState([]);
  const [ filter, setFilter ] = useState([]);
  let results = [];

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
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
      <div>
        find countries <input value={filter} onChange={handleFilterChange}/>
      </div>
      <div>
        {filteredCountries.length !== 1
          ?
          results.map(result =>
            <div>
              <p>
                {result.name || result}
                {typeof result === 'object' && <button onClick={() => setFilter(result.name.toLowerCase())}>show</button>}
              </p> 

            </div>
          )
          :
          results.map(result =>
            <div>
              <h1>{result.name}</h1>
              <p>capital {result.capital}</p>
              <p>population {result.population}</p>
              <h2>languages</h2>
              <ul>
                {result.languages.map(language =>
                  <li key={language.id}>{language.name}</li>
                )}
              </ul>
              <img src={result.flag} width="20%" alt="flag"/>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default App;
