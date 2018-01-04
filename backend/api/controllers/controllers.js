const http = require("http");
const axios = require('axios');

const test = (req, res) => {
  res.json({ msg: 'online' });
};

const testget = (req, res) => {
  let rawData;
  axios({
    method:'get',
    url:'http://www.recipepuppy.com/api/?i=sugar',
  }).then((result) => {
    rawData = result.data;
    res.json(rawData);
  }).catch((err) => {
    console.log(err.response.data);
  });
};

module.exports = {
  test,
  testget,
}
