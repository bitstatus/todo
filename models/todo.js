module.exports = function(sequelize, DataTypes) {
	return sequelize.define('todo', {
		description: {

			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [2, 100]
			}

		},
		completed: {
			type: DataTypes.BOOLEAN
		}
	});
};