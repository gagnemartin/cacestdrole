import { Request, Response } from 'express'
import User from '../models/User'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { SendErrorStatus } from '../utils/errors'

class AuthController
{
    constructor()
    {
        this.login = this.login.bind(this)
    }

    login(req: Request, res: Response)
    {
        if (typeof req.body.email === 'undefined' || typeof req.body.password === 'undefined') {
            throw new Error('Unauthorized')
        }

        User.scope('unprotected').findOne({
            where: {
                email: req.body.email,
            }
        })
            .then((user: object|any) => {
                if (!user) {
                    res.sendStatus(401)
                }

                bcrypt.compare(req.body.password, user.password, (err: any, isSame: boolean) => {
                    if (isSame) {
                        const JWT_SECRET: any = process.env.JWT_SECRET
                        const token = jwt.sign({email: user.email, id: user.id}, JWT_SECRET)

                        res.send({user, token})
                    } else {
                        res.sendStatus(401)
                    }
                })
            })
            .catch((thrown: any) => {
                SendErrorStatus(thrown, res)
            })
    }
}

export default new AuthController()