import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize'
import db from '../config/database'
import Post from './Post'

class User extends Model {
	public id?: number
	public email!: string
	public username!: string
}

const attributes = {
	email: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true
	},
	username: {
		type: DataTypes.TEXT,
		allowNull: false,
		unique: true
	}
}

const options = {
	sequelize: db,
	modelName: 'user'
}

User.init(attributes, options)

User.hasMany(Post, { foreignKey: 'user_id' })
Post.belongsTo(User, { foreignKey: 'user_id' })

export default User