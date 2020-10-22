const axios = require('axios');

const getProductAnswerGet = (Id) => axios.get(`http://localhost:9002/qa/${Id}/answers`)
  .then((data) => data)
  .catch((err) => { throw err; });

export default getProductAnswerGet;
