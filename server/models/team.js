var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TeamSchema = new Schema({
    name: String
});

mongoose.model('Team', TeamSchema);
