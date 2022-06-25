import { useRef } from 'react'
import { useSearchParams } from 'react-router-dom'

import style from './search.module.css'

const SearchForm = () => {
	const ref = useRef(null)

	const [searchParams, setSearchParams] = useSearchParams()

	const handleSubmit = (e) => {
		e.preventDefault()

		const term = ref.current.value

		setSearchParams({ search: term })
	}

	return (
		<form onSubmit={handleSubmit} className={style.form}>
			<input
				type='search'
				placeholder='Busca'
				className={style.input_search}
				ref={ref}
			></input>
			<button type='submit' className={style.button}>
				Buscar
			</button>
		</form>
	)
}

export default SearchForm
