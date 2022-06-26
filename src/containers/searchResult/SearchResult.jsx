import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import useSearch from '../../hooks/useSearch'
import Pagination from '../pagination/Pagination'
import ListOfAlbums from '../listOfAlbums/ListOfAlbums'

const SearchResult = () => {
	const [searchParams, setSearchParams] = useSearchParams()
	const [term, setTerm] = useState(searchParams.get('search'))
	const [page, setPage] = useState(searchParams.get('page') || 1)
	const [result, load, error] = useSearch(term, page)

	useEffect(() => {
		setTerm(searchParams.get('search'))
		setPage(searchParams.get('page') || 1)
	}, [searchParams])

	if (term) {
		return (
			<>
				<Pagination page={page} result={result} />
				<ListOfAlbums result={result} load={load} error={error} />
				<Pagination page={page} result={result} />
			</>
		)
	} else return <></>
}

export default SearchResult
