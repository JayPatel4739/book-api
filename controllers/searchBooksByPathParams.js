// search the book, req.params
import { books } from '../book.js'

export const searchBooksByPathParams = (req, res) => {
	let bookData = books;

	const {field, term} = req.params;

	const allowedParams = ["title", "author", "genre", "year"];

	if(!allowedParams.includes(field)) {
		res.status(404).json({message: "Invalid path params!!!"});
	}
	else {
		bookData = bookData.filter((book) => book[field].toLowerCase() == term.toLowerCase());

		if(bookData.length === 0) {
			res.status(404).json({message: "Book not found!!!"});
		}
		else {
			res.json(bookData);
		}
	}
}