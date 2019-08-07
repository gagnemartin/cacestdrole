const Sequelize = require('sequelize')
const db = require('../config/database')
const Post = require('./Post')

class User extends Sequelize.Model {}

const attributes = {
	email: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true
	},
	username: {
		type: Sequelize.TEXT,
		allowNull: false,
		unique: true
	}
}

const options = {
	sequelize: db,
	modelName: 'user',
	underscored: true
}

User.init(attributes, options)

User.hasMany(Post, { foreignKey: 'user_id' })
Post.belongsTo(User, { foreignKey: 'user_id' })

module.exports = User