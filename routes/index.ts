import Express, { NextFunction, Request, Response } from 'express'
import PostRoutes from './PostsRoutes'

const api = Express()

// Post Routes
api.use('/posts', PostRoutes)

// Error handling from throws in Controllers
api.use(function (err: any, req: Request, res: Response, next: NextFunction) {
    if (err.message === 'Not found') {
        res.sendStatus(404)
    }

    res.sendStatus(500)
})

export default api