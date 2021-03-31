import React from 'react';

const Search = ({ value, handler }) => {
  return (
    <div>
          filter shown with<input value={value} onChange={handler} />
    </div>
  )
}

export default Search;
