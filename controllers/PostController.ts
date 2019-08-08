import { Request, Response } from 'express'
import { Op } from 'sequelize'
import Post from '../models/Post'
import User from '../models/User'
import Category from '../models/Category'
import Tag from '../models/Tag'
import { SendErrorStatus } from "../utils/errors"

class PostController
{
    constructor()
    {
        this.index = this.index.bind(this)
        this.view = this.view.bind(this)
    }

    /**
     * List the Posts with a pagination
     *
     * @param req
     * @param res
     */
    index(req: Request, res: Response)
    {
        const where: any = { online: 1, visible: 1 }

        if (req.params.hasOwnProperty('lastId') && !isNaN(parseInt(req.params.lastId))) {
            where['id'] = { [Op.lt]: parseInt(req.params.lastId) }
        }

        Post.findAll({
            where: where,
            order: [
                [ 'created', 'DESC' ]
            ],
            include: [{
                model: User,
            }],
            limit: 10
        })
            .then((posts: Array<Object>) => {
                if (posts.length === 0) {
                    throw new Error('Not found')
                }

                res.send(posts)
            })
            .catch((thrown: any) => {
                SendErrorStatus(thrown, res)
            })
    }

    /**
     * View a single Post
     *
     * @param req
     * @param res
     */
    view(req: Request, res: Response)
    {
        const id = parseInt(req.params.id)

        if (isNaN(id)) {
            throw new Error('Not found')
        }

        Post.findOne({
            where: { id: id },
            include: [
                    { model: Category },
                    { model: User },
                    { model: Tag },
                ]
        })
            .then((post: Object|null) => {
                if(!post) {
                    throw new Error('Not found')
                }

                res.send(post)
            })
            .catch((thrown: any) => {
                SendErrorStatus(thrown, res)
            })
    }
}

export default new PostController()