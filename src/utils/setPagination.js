//NEXT PAGE FUNCTION
export const next = (page, search, setSearch) => {
	const term = search.get('search')

	setSearch({
		search: term,
		page: page + 1,
	})
}

//BACK PAGE FUNCTION
export const back = (page, search, setSearch) => {
	const term = search.get('search')

	setSearch({
		search: term,
		page: page - 1,
	})
}
