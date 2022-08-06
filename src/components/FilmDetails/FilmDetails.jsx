import useCount from '../hooks/useCount';
import FilmInfo from '../FilmInfo/FilmInfo';
import FilmReviews from '../FilmReviews/FilmReviews';

const FilmDetails = (params) => {
	const { count, incCount, decCount } = useCount(0);
	const revs = [
		{
			text: 'qweqweqweqwe',
			author: 'qwesdaxzc',
			id: 1
		},
		{
			text: 'eeewewe',
			author: 'zxvvbb',
			id: 2
		},
		{
			text: '43543645',
			author: 'zxvytrfbhfgvbb',
			id: 3
		},
	]
	return (
		<div>
			<FilmInfo params={params} />
			<FilmReviews revs={revs} />
			<div>
				<button onClick={incCount}>+</button>
				{count}
				<button onClick={decCount}>-</button>
			</div>
		</div>
	)
}

export default FilmDetails;
