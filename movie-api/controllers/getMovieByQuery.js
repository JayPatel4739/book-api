import { movies } from '../data/movies.js'

export const getMovieByQuery = (req, res) => {
	const { title, director, genre, year, rating } = req.query

	let data = movies

	if(title){
		data = data.filter((movie) => movie.title.toLowerCase() == title.toLowerCase())
	}
	if(director){
		data = data.filter((movie) => movie.director.toLowerCase() == director.toLowerCase())
	}
	if(genre){
		data = data.filter((movie) => movie.genre.toLowerCase() == genre.toLowerCase())
	}
	if(year){
		data = data.filter((movie) => movie.year == year)
	}
	if(rating){
		data = data.filter((movie) => movie.rating == rating)
	}

	return res.json(data)
}