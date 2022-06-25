import { apiURL } from './global'

export default function getSearch(term) {
	const URL = `${apiURL}?terms=${term.replace(' ', '+')}`

	return fetch(URL, { method: 'POST' })
		.then((res) => res.json())
		.catch((err) => {
			console.log(err)
		})
}
