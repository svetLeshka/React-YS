import React, { useCallback, useRef } from 'react'
import styles from '../styles.module.scss';
import classnames from 'classnames';

const Tag = ({ color, w = "40px", h = "18px" }) => {
	const dimensions = {
		width: w,
		height: h
	};
	return (
		<div style={dimensions} className={classnames(styles['tags__tag'], styles[`tags__tag_${color}`])}></div>
	)
}

export default Tag
