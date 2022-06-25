import style from './load.module.css'

const Loading = () => {
	return (
		<div className={style.load}>
			<div className={style.spinner}></div>
		</div>
	)
}

export default Loading
