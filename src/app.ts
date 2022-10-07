import "dotenv/config"
import express from "express";
import cors from "cors";
import { router } from './routes'
import db from './config/mongo'
const port = process.env.PORT || 8080
const app = express()

app.use(cors())
app.use(express.json())
app.use( router)
db().then(() => console.log('database is connected'))

app.listen(port, () => console.log(`listo en el puerto ${port}`))

