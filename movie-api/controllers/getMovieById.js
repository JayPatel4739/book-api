import { movies } from '../data/movies.js'

export const getMovieById = (req, res) => {
	const { id } = req.query

	let data = movies

	data = data.filter((movie) => movie.id == id)

	return res.json(data)
}