import express, { Router } from 'express'
import routes from '../routes'

const app = express()

app.listen(3000)

app.use(routes)
