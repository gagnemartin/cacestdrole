import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize'
import db from '../config/database'
//const User = require('./User')

class Post extends Model {
	public id!: number
	public name!: string
	public content!: string
	public created!: string
	public online!: number
	public visible!: number
	public views!: number
}

const attributes = {
	name: {
		type: DataTypes.STRING,
		allowNull: false
	},
	content: {
		type: DataTypes.TEXT,
		allowNull: false
	},
	created: {
		type: DataTypes.DATE,
		allowNull: false
	},
	online: {
		type: DataTypes.TINYINT,
	},
	visible: {
		type: DataTypes.TINYINT,
	},
	views: {
		type: DataTypes.INTEGER
	},
	thumbnail: {
		type: DataTypes.STRING
	}
}

const options = {
	sequelize: db,
	modelName: 'post',
	underscored: true
}

Post.init(attributes, options)

export default Post