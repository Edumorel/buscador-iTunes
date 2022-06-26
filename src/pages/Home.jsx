import SearchForm from '../components/searchForm/SearchForm'
import SearchResult from '../containers/searchResult/SearchResult'

import style from '../styles/home.module.css'

const Home = () => {
	return (
		<main className={style.main}>
			<h1 className={style.title}>Bienvenido al buscador de iTunes</h1>
			<p className={style.paragraph}>Puedes buscar tu música favorita aquí</p>

			<SearchForm />

			<SearchResult />
		</main>
	)
}

export default Home
