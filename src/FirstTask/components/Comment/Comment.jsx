import React from 'react'
import styles from './styles.module.scss'

const Comment = ({ author, text }) => {
	return (
		<div className={styles['comment__wrapper']}>
			<div className={styles['comment__header']}>
				<p className={styles['comment__author']}>{author}</p>
				<div className={`${styles['comment__close']} _icon-close`}></div>
			</div>
			<div className={styles['comment__content']}>{text}</div>
		</div>
	)
}

export default Comment
