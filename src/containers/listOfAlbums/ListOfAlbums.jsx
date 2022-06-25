import useSearch from '../../hooks/useSearch'
import Loading from '../../components/loading/Loading'
import Error from '../../components/error/Error'
import Album from '../../components/album/Album'

import style from './listOfAlbums.module.css'

const ListOfAlbums = ({ search = '' }) => {
	const [result, load, error] = useSearch(search)

	if (!load) return <Loading />
	else if (error) return <Error error={error} />

	return (
		<section className={style.list}>
			{result.map((el) => (
				<Album
					key={el.trackId}
					artwork={el.artworkUrl100}
					albumName={el.collectionName}
					artistName={el.artistName}
				/>
			))}
		</section>
	)
}

export default ListOfAlbums
