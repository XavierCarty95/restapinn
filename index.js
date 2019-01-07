const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose")

//set up express app 
const app = express();

//connect to mongodb

mongoose.connect('mongodb://localhost/ninjago',{ useNewUrlParser: true });
mongoose.Promise = global.Promise; 


app.use(bodyParser.json());

//intialize routes 
app.use('/api', require('./routes/api'));

// set up express app

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("now listening on my port")
})
