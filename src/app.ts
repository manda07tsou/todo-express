import express from "express"
import { router } from "./routes/routes.js";
import { validatorMiddleware } from "./middlewares/validatorMiddleware.js";

const app = express()
const port = 3001

app.use(express.json())

app.use('/api', router)

app.listen(port, () => {
    console.log("serveur demarrer sur le port "+port)
})