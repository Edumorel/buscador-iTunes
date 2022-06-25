import style from './error.module.css'

const Error = ({ error = 'Lo sentimos, se ha producido un error' }) => {
	return (
		<div className={style.error}>
			<span className={style.error_message}>{error}</span>
		</div>
	)
}

export default Error
