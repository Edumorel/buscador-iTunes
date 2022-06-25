import { useEffect, useState } from 'react'
import getSearch from '../utils/getSearch'

export default function useSearch(search) {
	const [result, setResult] = useState([])
	const [state, setState] = useState('loading')

	useEffect(() => {
		setState('loading')

		getSearch(search)
			.then((res) => {
				const { results } = res

				setResult(results)
				setState('load')
			})
			.catch((err) => console.log(err))
	}, [search])

	return [result, state]
}
