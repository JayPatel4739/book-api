import express from 'express'
import { getAllBooks } from '../controllers/getAllBooks.js'
import { getBookById } from '../controllers/getBookById.js'
import { searchBooksByPathParams } from '../controllers/searchBooksByPathParams.js'

const router = express.Router();

router.get('/', getAllBooks);
router.get('/id', getBookById);
router.get('/:field/:term', searchBooksByPathParams);

export default router;