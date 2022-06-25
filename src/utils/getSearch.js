import { apiURL, limit } from './global'

export default function getSearch(term) {
	const URL = `${apiURL}?term=${term.replace(
		' ',
		'+'
	)}&limit=${limit}&entity=album`

	return fetch(URL, { method: 'POST' }).then((res) => res.json())
}
