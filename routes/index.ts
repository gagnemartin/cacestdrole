import Express, { NextFunction, Request, Response } from 'express'
import PostsRoutes from './PostsRoutes'
import CategoriesRoutes from './CategoriesRoutes'

const api = Express()

// Post Routes
api.use('/posts', PostsRoutes)
api.use('/categories', CategoriesRoutes)

// Error handling from throws in Controllers
api.use(function (err: any, req: Request, res: Response, next: NextFunction) {
    if (err.message === 'Not found') {
        res.sendStatus(404)
    }

    res.sendStatus(500)
})

export default api