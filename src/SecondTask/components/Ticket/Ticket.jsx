import React from 'react'
import styles from './styles.module.scss'
import classnames from 'classnames'
import TextInput from 'SecondTask/components/TextInput/TextInput'
import MultiSelector from 'SecondTask/components/MultiSelector/MultiSelector'
import Button from 'SecondTask/components/Button/Button'

const Ticket = ({ closeTicket, isTicketShown, isTicketEditable }) => {
	const colorsList = ["violet", "green", "red", "orange", "blue", "light-green", "dark-blue", "yellow"];
	return (
		<>
			<p className={styles['ticket__header']}>Создать тикет</p>
			<div className={styles['ticket__content']}>
				<div className={styles['ticket__text-wrapper']}>
					<TextInput isTextArea={false} />
					<TextInput isTextArea={true} />
				</div>
				<div className={styles['ticket__footer']}>
					<MultiSelector
						selects={colorsList}
					/>
					<Button
						clickFn={closeTicket}
						text="Сохранить"
						className="btn__add-ticket"
						isPlusExist={false}
					/>
				</div>
			</div>
		</>
	)
}

export default Ticket
