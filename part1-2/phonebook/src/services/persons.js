import axios from 'axios';

const baseUrl = 'http://localhost:3001/persons';

const getAll = () => {
  const req = axios.get(baseUrl);
  return req.then(res => res.data)
}

const create = person => {
  const req = axios.post('http://localhost:3001/persons', person);
  return req.then(res => res.data)
}

const destroy = (id) => {
  const req = axios.delete(`http://localhost:3001/persons/${id}`);
  return req.then(res => res.data)
}

const update = person => {
  const req = axios.put(`http://localhost:3001/persons/${person.id}`, person);
  return req.then(res => res.data);
}

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default { getAll, create, destroy, update };
