import express from 'express'
import { getMovieByQuery } from '../controllers/getMovieByQuery.js'
import { getMovieById } from '../controllers/getMovieById.js'
import { searchMovieByPathParams } from '../controllers/searchMovieByPathParams.js'

const movieRouter = express.Router()

movieRouter.get('/', getMovieByQuery)
movieRouter.get('/id', getMovieById)
movieRouter.get('/search/:field/:term', searchMovieByPathParams)


export default movieRouter