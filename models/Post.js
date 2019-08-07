const Sequelize = require('sequelize')
const db = require('../config/database')
const User = require('./User')

class Post extends Sequelize.Model {}

const attributes = {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	content: {
		type: Sequelize.TEXT,
		allowNull: false
	},
	created: {
		type: Sequelize.DATE,
		allowNull: false
	},
	online: {
		type: Sequelize.TINYINT,
	},
	visible: {
		type: Sequelize.TINYINT,
	},
	views: {
		type: Sequelize.INTEGER
	},
	thumbnail: {
		type: Sequelize.STRING
	}
}

const options = {
	sequelize: db,
	modelName: 'post',
	underscored: true
}

Post.init(attributes, options)

module.exports = Post