const express = require('express');
const app = express();
require("dotenv").config()
app.set('port', process.env.PORT || process.env.PORTSEC);
app.get('/', (req,res) =>  res.send('Hola Kevin'));
app.get('/load', (req, res) => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    res.send(randomNumber.toString());
  });

  app.post('/load', (req,res) =>  res.send('Hola Kevin Server'));

app.listen(app.get('port'), function() {
    console.log('Server on port-'+ process.env.PORT+'-' + process.env.PORTSEC);
  });