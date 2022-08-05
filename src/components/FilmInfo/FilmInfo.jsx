import React from 'react'

const FilmInfo = ({ params }) => {
	return (
		<>
			<p>{params.title || 'what???'}</p>
			{Boolean(params.seasonsCount) && <p>{params.seasonsCount}</p>}
			<p>{params.genre}</p>
		</>
	)
}

export default FilmInfo;
