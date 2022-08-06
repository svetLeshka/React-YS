import styles from './styles.module.scss'
import React from 'react'
import Checkbox from '../Checkbox/Checkbox'
import Tag from '../Tags/Tag/Tag'
import TaskCard from '../TaskCard/TaskCard'

const FirstTask = () => {
	return (
		<div className={styles['first-task']}>
			<div className={styles['first-task__tags']}>
				<Tag color="violet" w="80px" h="24px" />
				<Tag color="green" w="80px" h="24px" />
				<Tag color="red" w="80px" h="24px" />
				<Tag color="orange" w="80px" h="24px" />
				<Tag color="blue" w="80px" h="24px" />
				<Tag color="light-green" w="80px" h="24px" />
				<Tag color="dark-blue" w="80px" h="24px" />
				<Tag color="yellow" w="80px" h="24px" />
			</div>
			<Checkbox message="Комментарий" />
			<div className={styles['first-task__card']}>
				<TaskCard
					tags={['violet', 'green', 'red', 'orange', 'blue', 'light-green', 'dark-blue', 'yellow']}
					isComAppear={true}
					isDescAppear={true}
				/>
			</div>
		</div>
	)
}

export default FirstTask
