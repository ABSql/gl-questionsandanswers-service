const axios = require('axios');

const putQuestionHelpful = (id) => axios.put(`http://localhost:9002/qa/question/${id}/helpful`)
  .then((data) => data, console.log('in q put'))
  .catch((err) => {throw err;});

export default putQuestionHelpful;
