var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    PORT = 8000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));
app.use(express.static(__dirname + '/bower_components'));

// Routes
require('./server/config/routes.js')(app);

// MongoDB
require('./server/config/mongoose.js');

app.listen(PORT, function () {
    console.log(`Running on ${PORT}`);
});
