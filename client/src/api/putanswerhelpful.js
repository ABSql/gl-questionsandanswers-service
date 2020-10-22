const axios = require('axios');

const putAnswerHelpful = (id) => axios.put(`http://localhost:9002/qa/answer/${id}/helpful`)
// console.log(id);
  .then((data) => data, console.log('in answer Request'))
  .catch((err) => {throw err;});

export default putAnswerHelpful;