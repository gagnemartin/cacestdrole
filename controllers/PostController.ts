import { Request, Response, NextFunction } from 'express';
import Post from '../models/Post'
import User from "../models/User"

class PostController {
    constructor()
    {
        this.index = this.index.bind(this)
        this.view = this.view.bind(this)
    }

    index(req: Request, res: Response)
    {
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
            .then((posts: Array<Object>) => {
                res.send(posts)
            })
            .catch((thrown: any) => {
                res.send({
                    error: thrown.name
                })
            })
    }

    view(req: Request, res: Response)
    {
        const id = parseInt(req.params.id)

        if (isNaN(id)) {
            throw new Error('Not found')
        }

        Post.findOne({
            where: { id: id }
        })
            .then((post: Object|null) => {
                if(!post) {
                    throw new Error('Not found')
                }

                res.send(post)
            })
            .catch((thrown: any) => {
                if (thrown.message === 'Not found') {
                    res.sendStatus(404)
                } else {
                    res.sendStatus(500)
                }
            })
    }
}

export default new PostController()