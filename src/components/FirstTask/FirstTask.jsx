import styles from './styles.module.scss'
import React, { useState } from 'react'
import Checkbox from 'components/Checkbox/Checkbox'
import Tag from 'components/Tags/Tag/Tag'
import TaskCard from 'components/TaskCard/TaskCard'
import Button from 'components/Button/Button'
import TextInput from 'components/TextInput/TextInput'
import MultiSelector from 'components/MultiSelector/MultiSelector'
import Comment from 'components/Comment/Comment'

const FirstTask = () => {
	const [selected, addSelect] = useState({});
	const colorsList = ["violet", "green", "red", "orange", "blue", "light-green", "dark-blue", "yellow"];
	return (
		<div className={styles['first-task']}>
			<div className={styles['first-task__tags']}>
				{
					colorsList.map(color => {
						return (
							<Tag key={color} color={color} w="80px" h="24px" />
						)
					})
				}
			</div>
			<Checkbox message="Комментарий" />
			<div className={styles['first-task__card']}>
				<TaskCard
					tags={colorsList}
					isComAppear={true}
					isDescAppear={true}
				/>
			</div>
			<div className={styles['first-task__btn']}>
				<Button text='Добавить тикет' className='btn__add-ticket' isPlusExist={true} />
			</div>
			<div className={styles['first-task__inputs']}>
				<TextInput isTextArea={false} />
				<TextInput isTextArea={true} />
			</div>
			<MultiSelector
				selects={colorsList}
				selected={selected}
				addSelect={addSelect}
			/>
			<div className={styles['first-task__comment']}>
				<Comment
					author="Иванов Иван"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "
				/>
			</div>
		</div>
	)
}

export default FirstTask
