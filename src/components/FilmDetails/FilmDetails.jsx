import useCount from '../hooks/useCount';
import FilmInfo from '../FilmInfo/FilmInfo';

const FilmDetails = (params) => {
	const { count, incCount, decCount } = useCount(0);
	return (
		<div>
			<FilmInfo params={params} />
			<div>
				<button onClick={incCount}>+</button>
				{count}
				<button onClick={decCount}>-</button>
			</div>
		</div>
	)
}

export default FilmDetails;
