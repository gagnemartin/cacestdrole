import { Request, Response } from 'express'
import Category from '../models/Category'
import { SendErrorStatus } from "../utils/errors"

class CategoryController
{
    constructor()
    {
        this.index = this.index.bind(this)
    }

    /**
     * List all categories with optional limit
     *
     * @param req
     * @param res
     */
    index(req: Request, res: Response)
    {
        const limit = parseInt(req.params.limit)
        let options: any = {
            order: [
                ['post_count', 'DESC']
            ]
        }

        if (!isNaN(limit) && limit > 0) {
            options.limit = limit
        }

        Category.findAll(options)
            .then(categories => {
                res.send(categories)
            })
            .catch(thrown => {
                SendErrorStatus(thrown, res)
            })
    }
}

export default new CategoryController()