import style from './album.module.css'

const Album = ({ artwork = '', albumName = '', artistName = '' }) => {
	return (
		<figure className={style.album}>
			<img className={style.album_image} src={artwork} />
			<h1 className={style.album_title}>{albumName}</h1>
			<h2 className={style.album_artist}>{artistName}</h2>
		</figure>
	)
}

export default Album
