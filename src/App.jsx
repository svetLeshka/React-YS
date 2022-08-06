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

//2 26 00

//forms 2 00 15
//styles 2 12 06
//stop 2 30 50