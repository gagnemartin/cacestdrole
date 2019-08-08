import { Sequelize, Model, DataTypes, BuildOptions } from 'sequelize'
import db from '../config/database'
import Post from './Post'

const PROTECTED_ATTRIBUTES: any = [ 'password', 'banned' ]

class User extends Model {
	public id?: number
	public email!: string
	public username!: string
	private password!: string

	toJSON () {
		// hide protected fields
		let attributes: any = Object.assign({}, this.get())
		for (let a of PROTECTED_ATTRIBUTES) {
			delete attributes[a]
		}
		return attributes
	}
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
	},
	password: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
	banned: {
		type: DataTypes.TINYINT,
		allowNull: false
	},
	role: {
		type: DataTypes.STRING,
		allowNull: false
	}
}

const options = {
	sequelize: db,
	modelName: 'user',
	defaultScope: {
		where: { banned: 0 },
		attributes: {
			exclude: PROTECTED_ATTRIBUTES
		}
	},
	scopes: {
		unprotected: {
			attributes: {
				include: PROTECTED_ATTRIBUTES
			}
		}
	}
}

User.init(attributes, options)

User.hasMany(Post, { foreignKey: 'user_id' })
Post.belongsTo(User, { foreignKey: 'user_id' })

export default User