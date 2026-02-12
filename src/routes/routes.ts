import express, {type Request, type Response} from 'express';
import * as todoController from '../controllers/TodoController';
import * as userController from '../controllers/UserController';
import { todoValidationSchema } from '../config/validations/todoValidationSchema';
import { validatorMiddleware } from '../middlewares/validatorMiddleware';
import { useValidationSchema } from '../config/validations/userValidationSchema';
import { param } from 'express-validator';

const router = express.Router()

router.get('/todo', todoController.Index)
router.get('/todo/:id',
    param('id').isNumeric().toInt(),
    validatorMiddleware,
    todoController.Detail
)

router.post('/todo', 
    todoValidationSchema,
    validatorMiddleware,
    todoController.Create
)

router.get('/user', userController.Liste)

router.post('/user',
    useValidationSchema,
    validatorMiddleware,
    userController.CreateUsers
)

export {router}