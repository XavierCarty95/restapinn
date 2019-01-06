const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json());

app.use('/api', require('./routes/api'));

// set up express app

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("now listening on my port")
})
