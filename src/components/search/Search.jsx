import style from './search.module.css'
import getSearch from '../../utils/getSearch'
import { useRef } from 'react'

const Search = () => {
	const ref = useRef(null)

	const handleSubmit = (e) => {
		e.preventDefault()

		getSearch().then()
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

export default Search
