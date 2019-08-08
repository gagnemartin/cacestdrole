import { Router } from 'express'
import CategoryController from '../controllers/CategoryController'

const CategoriesRoutes = Router()

CategoriesRoutes.get('/index/:limit(\\d+)?', CategoryController.index)


export default CategoriesRoutes