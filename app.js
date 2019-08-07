const User =  require('./models/User')
const Post =  require('./models/Post')
const express = require('express')
const db = require('./config/database')

const Sequelize = require('sequelize')
const Op = Sequelize.Op

db.authenticate()
	.then(() => {
		console.log('Connection has been established successfully.');
	})
	.catch(err => {
		console.error('Unable to connect to the database:', err);
	});


User.findOne({
	where: { email: 'martin_gagne@outlook.com' },
	include: [Post]
})
	.then(users => {
		console.log(users)
	})
const app = express()


app.get('/', (req, res) => {
	Post.findAll({
		where: { online: 1, visible: 1 },
		order: [
			[ 'created', 'DESC' ]
		],
		include: [{
			model: User,
		}],
		limit: 10
	})
		.then(posts => {
			res.send(posts)
		})
		.catch(thrown => {
			res.send({
				error: thrown.name
			})
		})
})

app.listen(8000, () => {
	console.log('App is listening on port 8000!')
})