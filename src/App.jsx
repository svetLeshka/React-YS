import FilmDetails from './components/FilmDetails/FilmDetails';
export const App = () => {
	const filmDetails = {
		title: 'Simpsons',
		seasonsCount: 33,
		genre: 'cartoon',
	}
	return (
		<div>
			<header />
			<FilmDetails title={filmDetails.title} seasonsCount={filmDetails.seasonsCount} genre={filmDetails.genre} />
			<footer />
		</div>
	)
}

//1 35 38