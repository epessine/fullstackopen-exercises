import axios from 'axios';

const baseUrl = 'http://localhost:3001/persons';

const getAll = () => {
  const req = axios.get(baseUrl);
  return req.then(res => res.data)
}

const create = newPerson => {
  const req = axios.post('http://localhost:3001/persons', newPerson);
  return req.then(res => res.data)
}

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default { getAll, create };
