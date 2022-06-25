import Search from '../components/search/Search'

import style from '../styles/home.module.css'

const Home = () => {
	return (
		<main>
			<h1 className={style.title}>Bienvenido al buscador de iTunes</h1>
			<p className={style.paragraph}>Puedes buscar tu música favorita aquí</p>

			<Search />
		</main>
	)
}

export default Home
