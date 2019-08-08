import Express, { NextFunction, Request, Response } from 'express'
import PostsRoutes from './PostsRoutes'
import CategoriesRoutes from './CategoriesRoutes'
import AuthRoutes from './AuthRoutes'
import { SendErrorStatus } from "../utils/errors"

const api = Express()

// Post Routes
api.use('/posts', PostsRoutes)
api.use('/categories', CategoriesRoutes)
api.use('/auth', AuthRoutes)

// Error handling from throws in Controllers
api.use(function (err: any, req: Request, res: Response, next: NextFunction) {
    SendErrorStatus(err, res)
})

export default api