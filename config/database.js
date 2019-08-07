const Sequelize = require('sequelize');

const {
	DATABASE_USERNAME,
	DATABASE_PASSWORD,
	DATABASE_HOSTNAME,
	DATABASE_PORT,
	DATABASE_NAME,
	DATABASE_DIALECT
} = process.env;

const db = new Sequelize(DATABASE_NAME, DATABASE_USERNAME, DATABASE_PASSWORD, {
	host: DATABASE_HOSTNAME,
	dialect: DATABASE_DIALECT,
	port: DATABASE_PORT,
	define: {
		timestamps: false,
		underscored: true,
		sequelize: Sequelize
	}
})

db.authenticate()
	.then(() => {
		console.log('Connection has been established successfully.');
	})
	.catch(err => {
		console.error('Unable to connect to the database:', err);
	});

module.exports = db