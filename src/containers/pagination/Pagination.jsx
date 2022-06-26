import {
	BackButton,
	NextButton,
} from '../../components/paginationButtons/PaginationButtons'

import style from './pagination.module.css'

const Pagination = ({ page = 1, result = [] }) => {
	page = Number(page)

	const disabledBack = page <= 1
	const disabledNext = result.length < 20

	return (
		<section className={style.pagination}>
			<BackButton disabled={disabledBack} page={page} />
			<span className={style.pagination_page}>{page}</span>
			<NextButton page={page} disabled={disabledNext} />
		</section>
	)
}

export default Pagination
