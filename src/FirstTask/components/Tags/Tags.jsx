import Tag from './Tag/Tag'
import React from 'react'

const Tags = ({ tags, w, h }) => {
	return (
		<>
			{
				Boolean(tags.length) && tags.map(tag => {
					return (
						<Tag key={tag} color={tag} w={w} h={h} />
					)
				})
			}
		</>
	)
}

export default Tags
