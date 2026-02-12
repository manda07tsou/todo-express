import express, {type Request, type Response} from 'express';
import * as todoController from '../controllers/TodoController';
import * as userController from '../controllers/UserController';
import { todoCreateValidationSchema, todoFiltersValidationSchema, todoUpdateValidationSchema } from '../config/validations/todoValidationSchema';
import { validatorMiddleware } from '../middlewares/validatorMiddleware';
import { useValidationSchema } from '../config/validations/userValidationSchema';
import { param } from 'express-validator';
import { idParamsValidationSchema } from '../config/validations/utilsValidationSchema';

const router = express.Router()

router.get('/todo',
    todoFiltersValidationSchema,
    validatorMiddleware,
    todoController.Index
)

router.get('/todo/:id',
    idParamsValidationSchema,
    validatorMiddleware,
    todoController.Detail
)

router.post('/todo', 
    todoCreateValidationSchema,
    validatorMiddleware,
    todoController.Create
)

router.patch('/todo/:id',
    [
        idParamsValidationSchema,
        ...todoUpdateValidationSchema,
    ],
    validatorMiddleware,
    todoController.Update
)

router.delete('/todo/:id',
    idParamsValidationSchema,
    validatorMiddleware,
    todoController.Delete
)

//users
router.get('/user', userController.Liste)

router.post('/user',
    useValidationSchema,
    validatorMiddleware,
    userController.CreateUsers
)

export {router}