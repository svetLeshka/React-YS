import React from 'react'
import styles from './styles.module.scss'
import TaskCardContent from './TaskCardContent/TaskCardContent'
import TaskCardHeader from './TaskCardHeader/TaskCardHeader'

const TaskCard = ({ tags, isComAppear, isDescAppear }) => {
	return (
		<div className={styles['task-card__wrapper']}>
			<TaskCardHeader title="Нарисовать иллюстрации" />
			<TaskCardContent
				tags={tags}
				isComAppear={isComAppear}
				isDescAppear={isDescAppear}
			/>
		</div>
	)
}

export default TaskCard
