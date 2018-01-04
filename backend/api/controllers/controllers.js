const http = require("http");
const axios = require('axios');

const test = (req, res) => {
  res.json({ msg: 'online' });
};

const testget = (req, res) => {
  // let rawData = '';
  // http.get('http://www.recipepuppy.com/api/?i=sugar', (res) => {
  //   res.setEncoding('utf8');
  //   res.on('data', (chunk) => { rawData += chunk; });
  //   res.on('end', () => {
  //     try {
  //       const parsedData = JSON.parse(rawData);
  //       console.log(parsedData.results);
  //     } catch (e) {
  //       console.error(e.message);
  //     }
  //   });
  // }).on('error', (e) => {
  //   console.error(`Got error: ${e.message}`);
  // });
  // res.json(rawData);
  axios({
    method:'get',
    url:'http://www.recipepuppy.com/api/?i=sugar',
  }).then((res) => {
    console.log(res.data);
  });
};

module.exports = {
  test,
  testget,
}
