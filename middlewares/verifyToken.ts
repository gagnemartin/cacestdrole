import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction} from "express"

const verifyToken = (req: Request, res: Response, next: NextFunction) =>
{
    const JWT_SECRET: any = process.env.JWT_SECRET
    let token: any = req.headers['x-access-token'] || req.headers['authorization'];

    if (token) {
        token = token.replace('Bearer ', '')

        jwt.verify(token, JWT_SECRET, (err: any, decoded: any) => {
            if (err) {
                return res.sendStatus(401);
            } else {
                next();
            }
        });
    } else {
        return res.sendStatus(401);
    }
}

export default verifyToken