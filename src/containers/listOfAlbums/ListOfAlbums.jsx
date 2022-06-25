import useSearch from '../../hooks/useSearch'
import Loading from '../../components/loading/Loading'
import Album from '../../components/album/Album'

import style from './listOfAlbums.module.css'

const ListOfAlbums = ({ search = '' }) => {
	const [result, state] = useSearch(search)

	if (state == 'loading') return <Loading />

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
