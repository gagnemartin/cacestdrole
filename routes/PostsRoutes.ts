import { Router } from 'express'
import PostController from '../controllers/PostController'

const PostsRoutes = Router()

PostsRoutes.get('/index/:lastId(\\d+)?', PostController.index)
PostsRoutes.get('/view/:id(\\d+)', PostController.view)


export default PostsRoutes