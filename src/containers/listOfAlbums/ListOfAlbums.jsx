import Loading from '../../components/loading/Loading'
import Error from '../../components/error/Error'
import Album from '../../components/album/Album'

import style from './listOfAlbums.module.css'

const ListOfAlbums = ({ load = false, error = '', result = [] }) => {
	if (!load) return <Loading />
	else if (error) return <Error error={error} />

	return (
		<section className={style.list}>
			{result.map((el) => {
				return (
					<Album
						key={el.collectionId}
						artwork={el.artworkUrl100}
						albumName={el.collectionName}
						artistName={el.artistName}
					/>
				)
			})}
		</section>
	)
}

export default ListOfAlbums
