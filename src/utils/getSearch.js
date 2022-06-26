import { apiURL, limit } from './global'

export default function getSearch(term, page) {
	const offset = limit * (page - 1)

	const URL = `${apiURL}?term=${term}&limit=${limit}&entity=album&offset=${offset}`

	return fetch(URL, { method: 'POST' }).then((res) => res.json())
}
