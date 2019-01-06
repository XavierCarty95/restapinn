const express = require("express")
const router = express.Router();


// get a list of ninjas from the db
router.get('/ninjas', function(req,res){
   res.send({type: 'GET'});
   
});

//add a ninja in the db
router.post('/ninjas', function(req,res){
   res.send({type: 'POST'});
   
});

// update a ninja in the db
router.delete('/ninjas:id', function(req,res){
   res.send({type: 'DELETE'});
   
});

// delete a ninja from the db
router.get('/ninjas', function(req,res){
   res.send({type: 'GET'});
   
});

module.exports = router 