import React from 'react'
import styles from '../styles.module.scss'
import classnames from 'classnames';
import Tags from '../../Tags/Tags';

const TaskCardContent = ({ tags, isComAppear, isDescAppear }) => {
	return (
		<div className={styles['task-card__content']}>
			<div className={styles['task-card__tags']}>
				<Tags tags={tags} w="40px" h="18px" />
			</div>
			<div className={styles['task-card__info']}>
				{Boolean(isComAppear) && <div className={classnames(styles['task-card__com'], '_icon-comment')} />}
				{Boolean(isComAppear) && <div className={classnames(styles['task-card__desc'], '_icon-description')} />}
			</div>
		</div>
	)
}

export default TaskCardContent
