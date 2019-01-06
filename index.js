const express = require('express');

const app = express();

app.use('/api', require('./routes/api'));

// set up express app

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("now listening on my port")
})
