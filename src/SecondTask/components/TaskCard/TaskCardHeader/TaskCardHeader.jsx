import React from 'react'
import styles from '../styles.module.scss'
import classnames from 'classnames'

const TaskCardHeader = ({ title }) => {
	return (
		<div className={styles['task-card__header']}>
			<p className={styles['task-card__title']}>{title}</p>
			<a href="#!" className={classnames(styles['task-card__link'], '_icon-dots')}></a>
		</div>
	)
}

export default TaskCardHeader
