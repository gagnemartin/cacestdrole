import { Model, DataTypes } from 'sequelize'
import db from '../config/database'
import Post from './Post'

class Category extends Model {
    public id?: number
    public name!: string
    public slug!: string
}

const attributes = {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: false
    },
}

const options = {
    sequelize: db,
    modelName: 'category',
    underscored: true
}

Category.init(attributes, options)

Category.hasMany(Post, { foreignKey: 'category_id' })
Post.belongsTo(Category)

export default Category