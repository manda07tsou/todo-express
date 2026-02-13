import dotenv from 'dotenv'
import express from "express"
import { router } from "./routes/routes";
import {router as authRouter} from "./routes/auth.routes"
import { securityMiddleware } from './middlewares/securityMiddleware';

dotenv.config()

const app = express()
const port = 3001

app.use(express.json())

app.use('/', authRouter)

app.use(securityMiddleware)
app.use('/api', router)

app.listen(port, () => {
    console.log("serveur demarrer sur le port "+port)
})