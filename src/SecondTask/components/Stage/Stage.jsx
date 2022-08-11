import Button from 'SecondTask/components/Button/Button'
import TaskCard from 'SecondTask/components/TaskCard/TaskCard'
import React from 'react'
import styles from './styles.module.scss'

const Stage = ({ isStageAddable = true, cards, setData, showTicket, setTicketState }) => {
	const showAddTicket = () => {
		setTicketState((curState) => curState = false);
		setData({
			title: "",
			desc: "",
			tags: []
		});
		showTicket();
	}
	return (
		<div className={styles['stage__wrapper']}>
			<p className={styles['stage__title']}>{cards.title}</p>
			<div className={styles['stage__body']}>
				{
					Boolean(cards) &&
					cards.cards.map(card => {
						return (
							<TaskCard
								key={card.id}
								card={card}
								setData={setData}
								showTicket={showTicket}
								setTicketState={setTicketState}
							/>
						)
					})
				}
				{
					Boolean(isStageAddable) &&
					<div className={styles['stage__btn']}>
						<Button
							clickFn={showAddTicket}
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
