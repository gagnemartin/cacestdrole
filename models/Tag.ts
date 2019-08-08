import { Model, DataTypes } from 'sequelize'
import db from '../config/database'
import Post from './Post'

class Tag extends Model {
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
    modelName: 'tag',
    createdAt: false
}

Tag.init(attributes, options)

Tag.belongsToMany(Post, { through: 'posts_tags', foreignKey: 'tag_id' })
Post.belongsToMany(Tag, { through: 'posts_tags', foreignKey: 'post_id' })

export default Tag