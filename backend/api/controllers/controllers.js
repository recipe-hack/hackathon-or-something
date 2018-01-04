const http = require("http");

const test = (req, res) => {
  res.json({ msg: 'online' });
};

const testget = (req, res) => {
  let rawData = '';
  http.get('http://www.recipepuppy.com/api/?i=sugar', (res) => {
    res.setEncoding('utf8');
    res.on('data', (chunk) => { rawData += chunk; });
    res.on('end', () => {
      try {
        const parsedData = JSON.parse(rawData);
        console.log(parsedData.results);
      } catch (e) {
        console.error(e.message);
      }
    });
  }).on('error', (e) => {
    console.error(`Got error: ${e.message}`);
  });
};

module.exports = {
  test,
  testget,
}
