import express from "express";
import { Login } from "../controllers/AuthController";
import { loginValidationSchema } from "../config/validations/authValidationSchema";
import { validatorMiddleware } from '../middlewares/validatorMiddleware';

const router = express.Router()

router.post('/login',
    loginValidationSchema,
    validatorMiddleware,
    Login
)

export {router}