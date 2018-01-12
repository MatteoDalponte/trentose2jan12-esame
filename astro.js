var express = require('express');
var uuid = require('uuid-v4');
var bodyParser = require('body-parser');

var astro = express.Router();

var astronauti = [];

astro.post('/',function(req,resp){       //registrazione nuovo astronauta    
    var user = {};
    user.ID = uuid();
    user.firstName = req.body.firstName
    user.lastName = req.body.lastName
    user.isInSpace = req.body.isInSpace
    astronauti.push(user);

    resp.json(user);
});

astro.get('/',function(req,resp){       //info utente x dove x è ID
    resp.json(astronauti);
});

astro.get('/:x',function(req,resp){       //info utente x dove x è ID

    var user = {};

    for(var i=0; i<astronauti.length; i++){
        if(astronauti[i].ID == req.params.x){
            user = astronauti[i];
        }
    }

    resp.json(user);
});


module.exports = astro;