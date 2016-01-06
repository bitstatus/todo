var Squelize = require('sequelize');
var sequelize = new Squelize(undefined, undefined, undefined, {
	'dialect': 'sqlite',
	'storage': __dirname + '/basic-db.sqlite'
});
var Todo = sequelize.define('todo', {
	description: {
		type: Squelize.STRING
	},
	completed: {
		type: Squelize.BOOLEAN
	}
})
sequelize.sync().then(function() {
	console.log('Every thing is Ok');

Todo.create({
	description:'venkatesh',
	completed:false

}).then(function(todo){
	console.log('success');
    console.log(todo);
});
});

