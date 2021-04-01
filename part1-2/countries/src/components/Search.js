import React from 'react';

const Search = ({ filter, handler }) => {
  return (
    <div>
      find countries <input value={filter} onChange={handler}/>
    </div>
  )
}

export default Search;
