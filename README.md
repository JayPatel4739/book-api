# Book API

A small read-only API I put together while working through module 3 of an Express course. It serves a hardcoded list of ten books, and the whole point was to practice routers, query strings, and path parameters. There's no database, no auth, and no front end.

## Running it

```bash
npm install
npm start
```

It comes up on [http://localhost:3000](http://localhost:3000). The port is hardcoded in `index.js`, so change it there if 3000 is already busy.

## Endpoints

All three routes live under `/book`.

### `GET /book` — filter with query params

Accepts `title`, `author`, `genre`, and `year`. At least one is required, otherwise it returns a 400:

```json
{ "message": "Please provide at least one query parameter!" }
```

A few examples:

```
GET /book?genre=Fantasy
GET /book?author=Cal%20Newport
GET /book?genre=Self-help&year=2016
```

Filters are exact and case-sensitive, so `Technology` matches but `technology` doesn't. Passing more than one narrows the results down (they're ANDed together), and if nothing matches you get a 404.

```json
[
  {
    "id": 5,
    "title": "The Hobbit",
    "author": "J. R. R. Tolkien",
    "genre": "Fantasy",
    "year": 1937,
    "available": false,
    "pages": 310
  }
]
```

### `GET /book/id?id=3` — look up by id

Returns an array with the matching book in it. It's an array rather than a single object because the controller filters the list instead of using `find`.

```json
[
  {
    "id": 3,
    "title": "Atomic Habits",
    "author": "James Clear",
    "genre": "Self-help",
    "year": 2018,
    "available": true,
    "pages": 320
  }
]
```

Missing `id` gives a 400, and an unknown id gives a 404.

### `GET /book/:field/:term` — search by path params

`field` has to be one of `title`, `author`, `genre`, or `year`, and the comparison ignores case on both sides:

```
GET /book/title/clean%20code
GET /book/author/cal%20newport
```

An unsupported field, like `/book/pages/300`, returns a 404 with `Invalid path params!!!`. No match also returns a 404.

One catch: `year` is in the allowed list but doesn't actually work. The controller calls `.toLowerCase()` on the value, and numbers don't have that method, so `/book/year/2011` ends up as a 500. It's a known bug.

## Layout

```
index.js                       sets up Express and mounts the router at /book
book.js                        the book data
routers/routes.js              maps each path to a controller
controllers/getAllBooks.js     query param filtering
controllers/getBookById.js     id lookup
controllers/searchBooksByPathParams.js  path param search
```

## Notes

- The data is just an array in `book.js` with no persistence, so edits require a server restart.
- `index.html` is left over from an earlier exercise and isn't served by the app.
- There are no tests. `npm test` is still the default stub from `npm init`.
- Dependencies are Express 5 and whatever comes with it.
