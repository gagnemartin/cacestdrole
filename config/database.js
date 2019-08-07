const Sequelize = require('sequelize');

const {
	DATABASE_USERNAME,
	DATABASE_PASSWORD,
	DATABASE_HOSTNAME,
	DATABASE_PORT,
	DATABASE_NAME,
	DATABASE_DIALECT
} = process.env;

module.exports = new Sequelize(DATABASE_NAME, DATABASE_USERNAME, DATABASE_PASSWORD, {
	host: DATABASE_HOSTNAME,
	dialect: DATABASE_DIALECT,
	port: DATABASE_PORT,
	define: {
		timestamps: false,
		underscored: true,
		sequelize: Sequelize
	}
})