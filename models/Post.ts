import { Model, DataTypes } from 'sequelize'
import db from '../config/database'
import Category from './Category'
//const User = require('./User')

class Post extends Model {
	public id!: number
	public name!: string
	public slug!: string
	public content!: string
	public created!: string
	public online!: number
	public visible!: number
	public views!: number
	public cateogry_id!: number
}

const attributes = {
	name: {
		type: DataTypes.STRING,
		allowNull: false
	},
	slug: {
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
	defaultScope: {
		where: { visible: 1, online: 1 }
	}
}

Post.init(attributes, options)

export default Post