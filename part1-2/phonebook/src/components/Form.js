import React from 'react';

const Form = ({ handlers, values }) => {
  return (
    <form onSubmit={handlers[0]}>
      <div>
        name: <input value={values[0]} onChange={handlers[1]} />
      </div>
      <div>
          number: <input value={values[1]} onChange={handlers[2]} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default Form;