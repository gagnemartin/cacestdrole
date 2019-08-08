import { Router } from 'express';
import PostController from '../controllers/PostController'

const PostsRoutes = Router()

PostsRoutes.get('/index', PostController.index)
PostsRoutes.get('/view/:id', PostController.view)

export default PostsRoutes