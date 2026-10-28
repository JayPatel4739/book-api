import express from 'express'
import Router from './routes/Router.js'

const app = express()

const movieRouter = Router

app.use('/movie', movieRouter)

app.listen(3000, console.log('Server is up and running!!!'))