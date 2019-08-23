const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
let stringifyFile;

app.use(bodyParser.json());

app.get('/getNote', function(req, res) {
  fs.readFile('./test.json', 'utf-8', function(error, data) {
    if(error) throw error;
    stringifyFile = data;
    res.send(data);
  });
});

app.post('/updateNote/:note', function(req, res) {
  stringifyFile += req.params.note;
  fs.writeFile('./test.json', stringifyFile, function(error) {
    if(error) throw error;
    console.log('file updated');
  });
});

app.listen(3000);
