var Squelize = require('sequelize');
var sequelize = new Squelize(undefined, undefined, undefined, {
	'dialect': 'sqlite',
	'storage': __dirname + '/basic-db.sqlite'
});
var Todo = sequelize.define('todo', {
	description: {
<<<<<<< HEAD
		type: Squelize.STRING,
		allowNull: false,
		validate: {
			len: [2, 100]
		}
=======
		type: Squelize.STRING
>>>>>>> e38eb0b10e6a05a1b0f1ab681516ea4290ca9722
	},
	completed: {
		type: Squelize.BOOLEAN
	}
})
sequelize.sync().then(function() {
<<<<<<< HEAD
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
=======
	console.log('Every thing is Ok');

Todo.create({
	description:'venkatesh',
	completed:false

}).then(function(todo){
	console.log('success');
    console.log(todo);
});
});

>>>>>>> e38eb0b10e6a05a1b0f1ab681516ea4290ca9722
