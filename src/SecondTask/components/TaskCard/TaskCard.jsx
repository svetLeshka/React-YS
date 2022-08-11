import { TicketContext } from 'SecondTask/components/SecondTask/SecondTask'
import React, { useContext } from 'react'
import styles from './styles.module.scss'
import TaskCardContent from './TaskCardContent/TaskCardContent'
import TaskCardHeader from './TaskCardHeader/TaskCardHeader'

const TaskCard = ({ card, setData, showTicket, setTicketState }) => {
	const context = useContext(TicketContext);
	const clickFn = () => {
		context.tags[1](tags => card.tags);
		setData(data => data = { title: card.title, desc: card.desc, tags: card.tags });
		setTicketState((curState) => curState = true);
		showTicket((state) => !state);
	}
	return (
		<div
			onClick={clickFn}
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
