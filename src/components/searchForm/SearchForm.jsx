import { useRef } from 'react'
import { useSearchParams } from 'react-router-dom'

import { Button, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

import style from './search.module.css'

const SearchForm = () => {
	const ref = useRef(null)

	const [searchParams, setSearchParams] = useSearchParams()

	const handleSubmit = (e) => {
		e.preventDefault()

		const data = Object.fromEntries(new FormData(e.target))
		const { search } = data

		if (search) setSearchParams({ search: search })
	}

	return (
		<form onSubmit={handleSubmit} className={style.form}>
			<TextField
				id='outlined-basic'
				label='Busqueda'
				variant='filled'
				name='search'
				className={style.input_search}
			/>

			<Button type='submit' variant='contained' className={style.button}>
				<SearchIcon />
			</Button>
		</form>
	)
}

export default SearchForm
