import express = require('express')
import api from './routes'

const app: express.Application = express()

app.listen(8000, () => {
	console.log('App is listening on port 8000!')
})

app.use('/api/v1', api)