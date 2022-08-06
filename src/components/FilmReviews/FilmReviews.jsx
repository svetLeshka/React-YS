import React from 'react'
import scss from './styles.module.scss';
import classnames from 'classnames';

const FilmReviews = ({ revs }) => {
	return (
		<div>
			{
				revs.map(rev => {
					return (
						<div key={rev.id}>
							<p className={classnames(scss.t, scss['fz__yellow'])}>{rev.text}</p>
							<p className={classnames(scss.a)}>{rev.author}</p>
						</div>
					)
				})
			}
		</div>
	)
}

export default FilmReviews
