import React from 'react';

const Result = ({ countries, results, setFilter, setCapital }) => {
  let render;
  
  if (countries.length !== 1) {
    setCapital(undefined);
    render = results.map(result =>
      <div>
        <p>
          {result.name || result}
          {typeof result === 'object' && <button onClick={() => setFilter(result.name.toLowerCase())}>show</button>}
        </p> 

      </div>
    )
  } else {
    render = results.map(result => {
      setCapital(result.capital);
      return (
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
    })
  }

  return render
}

export default Result;