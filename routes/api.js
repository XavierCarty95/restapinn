const express = require ('express');
const router = express.Router();
const Ninja = require('../ninja');

// get a list of ninjas from the db
router.get('/ninjas', function(req, res , next){
    res.send({type: 'GET'});
});

// add a new ninja to the db
router.post('/ninjas', function(req, res, next){
    Ninja.create(req.body).then(function(ninja){
        res.send(ninja);
    }).catch(next)
});

// update a ninja in the db
router.put('/ninjas/:id', function(req, res,next){
    Ninja.findByOneAndUpdate({_id:req.params.id}, req.body).then(function(ninja){
         Ninja.findOne({_id:req.params.id}).then(function(ninja){
             res.send(ninja); 
         });
         
    });
        
    
});

// delete a ninja from the db
router.delete('/ninjas/:id', function(req, res , next){
    Ninja.findByOneAndDelete({_id:req.params.id}).then(function(ninja){
        res.send(ninja)
    });
    
});

module.exports = router;