var mongoose = require('mongoose');
var Team = mongoose.model('Team');
mongoose.Promise = global.Promise;

module.exports = {
    index: function(req, res){
        Team.find({}, function (err, teams){
            if (err) {
                res.json(err);
            }return res.json(teams);
        })
    },
    create: function(req, res){
        Team.create(req.body, function(err){
            if (err){
                return res.json(err);
            }return res.json(true);
        })
    },
    delete: function(req, res){
        Team.remove({_id: req.params.id}, function(err){
            if (err){
                return res.json(err);
            }return res.json(true);
        })
    }
}