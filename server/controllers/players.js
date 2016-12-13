var mongoose = require('mongoose');
var Player = mongoose.model('Player');
mongoose.Promise = global.Promise;

module.exports = {
    index: function (req, res) {
        Player.find({}, function (err, players) {
            if (err) {
                res.json(err);
            } else {
                res.json(players);
            }
        })
    },
    create: function (req, res) {
        Player.create(req.body, function (err) {
            if (err) {
                return res.json(err);
            } else {
                return res.json(true);
            }
        })
    },
    delete: function (req, res) {
        Player.remove({
            _id: req.params.id
        }, function (err) {
            if (err) {
                return res.json(err);
            }
            return res.json(true);
        })
    },
    update: function (req, res) {
        Player.update({_id: req.params.id}, {$set: req.body}, function(err){
            if (err){
                return res.json(err);
            }
            return res.json(true);
        })
    },
}