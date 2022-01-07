import express from 'express'
import { createUser } from '../controllers/userController'

const routes = express.Router()

routes.get('/', async (req, res) => {
    return res.json({ message: 'Hello World!'})
})

routes.get('/user/create', createUser)

export default routes;