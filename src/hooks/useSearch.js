import { useEffect, useState } from 'react'
import getSearch from '../utils/getSearch'

export default function useSearch(search) {
	const [result, setResult] = useState([])
	const [load, setLoad] = useState(false)
	const [error, setError] = useState()

	useEffect(() => {
		setLoad(false)
		setError()

		getSearch(search)
			.then((res) => {
				const { results } = res

				if (results.length > 0) {
					setResult(results)
				} else {
					setError('No se ha encontrado ningun resultado')
				}

				setLoad(true)
			})
			.catch((err) => {
				console.log(err)
				setError('Lo sentimos, se ha producido un error')
				setLoad(true)
			})
	}, [search])

	return [result, load, error]
}
