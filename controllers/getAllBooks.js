// books by params, in params certain limited fields only, req.query
import { books } from '../book.js'

export const getAllBooks = (req, res) => {
	let bookData = books
	const {title, author, genre, year} = req.query;

	if (!title && !author && !genre && !year) {
        return res.status(400).json({
            message: 'Please provide at least one query parameter!'
        })
    }

    //filtering
	if(title){
		bookData = bookData.filter((book) => book.title == title);
	}
	if(author){
		bookData = bookData.filter((book) => book.author == author);
	}
	if(genre){
		bookData = bookData.filter((book) => book.genre == genre);
	}
	if(year){
		bookData = bookData.filter((book) => book.year == year);
	}

	if (bookData.length === 0) {
	    return res.status(404).json({
	        message: 'No books found matching your query!!!'
	    })
	}



	res.json(bookData);
} 
