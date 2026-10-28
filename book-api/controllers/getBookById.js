import { books } from '../book.js'

export const getBookById = (req, res) => {
    const { id } = req.query

    if (!id) {
        return res.status(400).json({
            message: 'ID is required!'
        })
    }

    const bookData = books.filter((book) => book.id == id)

    if (bookData.length === 0) {
        return res.status(404).json({
            message: 'Book not found!!!'
        })
    }

    res.json(bookData)
}