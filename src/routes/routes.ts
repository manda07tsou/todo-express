import express, {type Request, type Response} from 'express';
import * as todoController from '../controllers/TodoController';
import * as userController from '../controllers/UserController';
import { todoValidationSchema } from '../config/validations/todoValidationSchema';
import { validatorMiddleware } from '../middlewares/validatorMiddleware';

const router = express.Router()

router.get('/todo', todoController.Index)
router.get('/todo/:id', todoController.Detail)

router.post('/todo', 
    todoValidationSchema,
    validatorMiddleware,
    todoController.Create
)

router.get('/user', userController.Liste)
router.post('/user', userController.CreateUsers)

export {router}