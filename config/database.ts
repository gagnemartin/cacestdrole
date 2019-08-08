import { Sequelize } from 'sequelize'

interface Config {
	DATABASE_USERNAME: string,
	DATABASE_PASSWORD: string,
	DATABASE_HOSTNAME: string,
	DATABASE_PORT: number,
	DATABASE_NAME: string,
	DATABASE_DIALECT: string
}

declare var process : {
	env: Config
}

const {
	DATABASE_USERNAME,
	DATABASE_PASSWORD,
	DATABASE_HOSTNAME,
	DATABASE_PORT,
	DATABASE_NAME,
	DATABASE_DIALECT
}: Config = process.env;


const db = new Sequelize(DATABASE_NAME, DATABASE_USERNAME, DATABASE_PASSWORD, {
	host: DATABASE_HOSTNAME,
	dialect: 'mariadb',
	port: DATABASE_PORT,
	define: {
		timestamps: false,
		underscored: true,
	}
})

// db.authenticate()
// 	.then(() => {
// 		console.log('Connection has been established successfully.');
// 	})
// 	.catch((err: any) => {
// 		console.error('Unable to connect to the database:', err);
// 	});

export default db