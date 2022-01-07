import axios from 'axios'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const createUser = ((req, res) => {
    axios.get('https://api.namefake.com/')
    .then((response) => {
        prisma.user.create({
            data: {
                name: response.data.name,
                email: response.data.email_url
            }
        }).then(() => {
            return res.json({ message: 'User created!' })
        }).catch((err) => {
            return res.json({ message: 'Error in user creation!', error: err })
        })
    })
})

module.exports = {
    createUser
}

