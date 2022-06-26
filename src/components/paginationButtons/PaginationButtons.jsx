import { useSearchParams } from 'react-router-dom'
import { Button } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { back, next } from '../../utils/setPagination'

//BACK PAGE BUTTON
export const BackButton = ({ disabled = false, page = 0 }) => {
	const [search, setSearch] = useSearchParams()

	if (disabled) {
		return (
			<Button disabled>
				<ArrowBackIosNewIcon />
			</Button>
		)
	} else {
		return (
			<Button onClick={() => back(page, search, setSearch)}>
				<ArrowBackIosNewIcon />
			</Button>
		)
	}
}

//NEXT PAGE BUTTON
export const NextButton = ({ disabled = false, page = 0 }) => {
	const [search, setSearch] = useSearchParams()

	if (disabled) {
		return (
			<Button disabled>
				<ArrowForwardIosIcon />
			</Button>
		)
	} else {
		return (
			<Button onClick={() => next(page, search, setSearch)}>
				<ArrowForwardIosIcon />
			</Button>
		)
	}
}
