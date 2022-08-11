import React from 'react'
import styles from './styles.module.scss'
import TaskCardContent from './TaskCardContent/TaskCardContent'
import TaskCardHeader from './TaskCardHeader/TaskCardHeader'

const TaskCard = ({ card }) => {
	return (
		<div
			className={styles['task-card__wrapper']}
		>
			<TaskCardHeader title={card.title} />
			<TaskCardContent
				tags={card.tags}
				isComAppear={card.isComAppear}
				isDescAppear={card.isDescAppear}
			/>
		</div>
	)
}

export default TaskCard
