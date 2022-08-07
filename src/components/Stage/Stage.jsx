import Button from 'components/Button/Button'
import TaskCard from 'components/TaskCard/TaskCard'
import React from 'react'
import styles from './styles.module.scss'

const Stage = ({ title, isStageAddable, cards }) => {
	return (
		<div className={styles['stage__wrapper']}>
			<p className={styles['stage__title']}>{title}</p>
			<div className={styles['stage__body']}>
				{
					Boolean(cards) &&
					cards.map(card => {
						return (
							<TaskCard
								key={card.id}
								tags={card.tags}
								isComAppear={card.isComAppear}
								isDescAppear={card.isDescAppear}
							/>
						)
					})
				}
				{
					Boolean(isStageAddable) &&
					<div className={styles['stage__btn']}>
						<Button
							text='Добавить тикет'
							className='btn__add-ticket'
							isPlusExist={true}
						/>
					</div>
				}
			</div>
		</div>
	)
}

export default Stage
