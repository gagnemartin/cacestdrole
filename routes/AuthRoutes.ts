import { Router } from 'express'
import bodyParser from 'body-parser'
import AuthController from '../controllers/AuthController'

const AuthRoutes = Router()

// parse application/x-www-form-urlencoded
AuthRoutes.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
AuthRoutes.use(bodyParser.json())

AuthRoutes.post('/login', AuthController.login)
//AuthRoutes.post('/register', AuthController.register)

///bcrypt.hash(req.body.password, 10, (err: any, res: any) => {})

export default AuthRoutes