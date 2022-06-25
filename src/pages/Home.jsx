import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import SearchForm from '../components/searchForm/SearchForm'
import ListOfAlbums from '../containers/listOfAlbums/ListOfAlbums'

import style from '../styles/home.module.css'

const Home = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const [search, setSearch] = useState(searchParams.get('search'))

	useEffect(() => {
		setSearch(searchParams.get('search'))
	}, [searchParams])

	return (
		<main className={style.main}>
			<h1 className={style.title}>Bienvenido al buscador de iTunes</h1>
			<p className={style.paragraph}>Puedes buscar tu música favorita aquí</p>

			<SearchForm />

			{search && <ListOfAlbums search={search} />}
		</main>
	)
}

export default Home
