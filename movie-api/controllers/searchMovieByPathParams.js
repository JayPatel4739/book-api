import { movies } from '../data/movies.js'

export const searchMovieByPathParams = (req, res) => {
	const { field, term } = req.params

	let data = movies

	const allowedField = ["title", "director", "genre", "year", "rating"]

	if(!allowedField.includes(field)){
		res.status(404).json({message: 'Invalid params!!!'})
	}
	else {
		data = data.filter((movie) => String(movie[field]).toLowerCase() == String(term).toLowerCase())

		if(data.length == 0) {
			res.status(404).json({message: 'Movie not found!!!'})
		}
		else{
			return res.json(data)
		}
	}
}