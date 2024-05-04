const express = require('express');
const app = express();
require("dotenv").config()
app.set('port', process.env.PORT || process.env.PORTSEC);
app.get('/', (req,res) =>  res.send('Hola Kevin'));
app.listen(app.get('port'), function() {
    console.log('Server on port-'+ process.env.PORT+'-' + process.env.PORTSEC);
  });