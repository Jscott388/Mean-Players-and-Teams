var Player = require('../controllers/players');
var Team = require('../controllers/teams');

module.exports = function(app){
    app.get('/', function(req, res){
        res.sendFile(__dirname + '../../client/index.html');
    });
    // Players Routes 
    app.get('/players', Player.index);
    app.post('/players', Player.create);
    app.delete('/players/:id', Player.delete);
    app.put('/players/:id', Player.update);
    // Team Routes
    app.get('/teams', Team.index);
    app.post('/teams', Team.create);
    app.delete('/teams/:id', Team.delete);
}