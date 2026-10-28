import express from 'express'
import bookRouter from './routers/routes.js'

const app = express();

app.use('/book', bookRouter);

app.listen(3000, (req, res) => {
	console.log('Server is up and running!!!');
})