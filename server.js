var express = require('express');
var _ = require('underscore');
var app = express();
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 3000;
var todos = [];
var todoNextId = 1;
app.use(bodyParser.json());
app.get('/', function(req, res) {
	res.send('Home');
});
app.get('/todos', function(req, res) {
	res.json(todos);
});
app.get('/todos/:id', function(req, res) {
	var todoid = parseInt(req.params.id, 10);
	var matchid = _.findWhere(todos, {
		id: todoid
	});
	//var matchid;
	//todos.forEach(function(tood){
	//	if(todoid===tood.id){
	//	matchid==tood;
	//}
	//});
	if (matchid) {
		res.json(matchid);
	} else {
		res.status(404).send();
	}


});
app.post('/todos', function(req, res) {
	var body = _.pick(req.body, 'description', 'completed');
	if (!_.isBoolean(body.completed) || !_.isString(body.description)) {
		return res.status(404).send();
	}
	body.id = todoNextId++;
	todos.push(body)
	res.json(body);
});
app.delete('/todos/:id', function(req, res) {
	var todoid = parseInt(req.params.id, 10);
	var matchId = _.findWhere(todos, {
		id: todoid
	});
	if (!matchId) {
		res.status(404).json({
			"error": "in passing id"
		});
	} else {
		todos = _.without(todos, matchId)
		res.json(matchId);
	}
});
app.listen(PORT, function() {
	console.log('server lisitining in' + PORT);
});