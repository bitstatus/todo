var Sequelize = require('sequelize');
var sequelize = new Sequelize(undefined, undefined, undefined, {
	'dialect': 'sqlite',
	'storage': __dirname + '/basic-db.sqlite'
});
var Todo = sequelize.define('todo', {
	description: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			len: [2, 100]
		}
		
	},
	completed: {
		type: Sequelize.BOOLEAN
	}
})
sequelize.sync().then(function() {

			console.log('Every thing is Ok');
Todo.findById(5).then(function(todo){
if(todo){
	console.log(todo.toJSON());
}else{
	console.log('not found');
}
});
});
			// Todo.create({
			// 	description: 'hai this is venkatesh',
			// 	completed: false

			// }).then(function(todo) {
			// 	return Todo.create({
			// 		description: 'hai this is raji',});
			// 	}).then(function() {

			// 		return Todo.findById(1)
			// 	}).then(function(todo) {
			// 		if (todo) {
			// 			console.log(todo.toJSON);
			// 		} else {
			// 			console.log('no to-do return');
			// 		}
			// 	}).catch(function(e) {
			// 		console.log(e);
			// 	});
			// });

	console.log('Every thing is Ok');

/*Todo.create({
	description:'venkatesh',
	completed:false

}).then(function(todo){
	console.log('success');
    console.log(todo);
});
*/

