import React from 'react'
import styles from './styles.module.scss'
import Checkbox from 'components/Checkbox/Checkbox'
import Stage from 'components/Stage/Stage'

const SecondTask = () => {
	const progresses = {
		todo: {
			title: "Todo",
			cards: [
				{
					id: 0,
					title: "Нарисовать иллюстрации",
					tags: ["violet", "green", "red", "orange", "blue", "light-green", "dark-blue", "yellow"],
					isComAppear: true,
					isDescAppear: true
				},
				{
					id: 1,
					title: "Сверстать лендинг по готовому шаблону",
					tags: ["violet", "green", "red", "orange"],
					isComAppear: true,
					isDescAppear: true
				},
				{
					id: 2,
					title: "Сверстать лендинг по готовому шаблону",
					tags: ["blue", "light-green", "dark-blue", "yellow"],
					isComAppear: false,
					isDescAppear: true
				},
				{
					id: 3,
					title: "Нарисовать иллюстрации",
					tags: ["blue", "light-green", "dark-blue"],
					isComAppear: true,
					isDescAppear: true
				},
			]
		},
		inProgress: {
			title: "In progress",
			cards: [
				{
					id: 4,
					title: "Нарисовать иллюстрации",
					tags: ["orange", "light-green", "dark-blue", "yellow", "violet", "green", "red", "blue"],
					isComAppear: true,
					isDescAppear: true
				},
				{
					id: 5,
					title: "Сверстать лендинг по готовому шаблону",
					tags: ["orange", "light-green", "dark-blue"],
					isComAppear: true,
					isDescAppear: true
				},
				{
					id: 6,
					title: "Нарисовать иллюстрации",
					tags: ["light-green", "dark-blue"],
					isComAppear: true,
					isDescAppear: true
				},
			]
		},
		done: {
			title: "Done",
			cards: [
				{
					id: 7,
					title: "Сверстать лендинг по готовому шаблону",
					tags: ["violet", "green", "red", "blue"],
					isComAppear: true,
					isDescAppear: true
				},
				{
					id: 8,
					title: "Нарисовать иллюстрации",
					tags: ["light-green", "dark-blue"],
					isComAppear: true,
					isDescAppear: true
				},
				{
					id: 9,
					title: "Сверстать лендинг по готовому шаблону",
					tags: ["orange", "light-green", "dark-blue"],
					isComAppear: true,
					isDescAppear: true
				},
				{
					id: 10,
					title: "Нарисовать иллюстрации",
					tags: ["orange", "light-green", "dark-blue", "yellow", "violet", "green", "red", "blue"],
					isComAppear: true,
					isDescAppear: true
				},
				{
					id: 11,
					title: "Нарисовать иллюстрации",
					tags: ["light-green", "dark-blue"],
					isComAppear: true,
					isDescAppear: true
				},
			]
		}
	}
	return (
		<div className={styles['second-task']}>
			<div className={styles['second-task__filter']}>
				<Checkbox message="Комментарий" />
				<Checkbox message="Описание" />
				<Checkbox message="Тег" />
			</div>
			<div className={styles['second-task__progress']}>
				<Stage
					title={progresses.todo.title}
					isStageAddable={true}
					cards={progresses.todo.cards}
				/>
				<Stage
					title={progresses.inProgress.title}
					isStageAddable={true}
					cards={progresses.inProgress.cards}
				/>
				<Stage
					title={progresses.done.title}
					isStageAddable={false}
					cards={progresses.done.cards}
				/>
			</div>
		</div>
	)
}

export default SecondTask