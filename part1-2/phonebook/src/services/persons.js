import axios from 'axios';

const baseUrl = '/api/persons';

const getAll = () => {
  const req = axios.get(baseUrl);
  return req.then(res => res.data)
}

const create = person => {
  const req = axios.post(baseUrl, person);
  return req.then(res => res.data)
}

const destroy = (id) => {
  const req = axios.delete(`${baseUrl}/${id}`);
  return req.then(res => res.data)
}

const update = person => {
  const req = axios.put(`${baseUrl}/${person.id}`, person);
  return req.then(res => res.data);
}

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default { getAll, create, destroy, update };
