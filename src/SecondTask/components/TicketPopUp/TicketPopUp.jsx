import React, { useContext, useCallback } from 'react'
import { Modal } from '../../../App'
import styles from './styles.module.scss'
import classnames from 'classnames'
import Ticket from 'SecondTask/components/Ticket/Ticket'
import { TicketContext } from 'SecondTask/components/SecondTask/SecondTask'

const AddTicketPopUp = ({ isTicketShown, isTicketEditable }) => {
	const context = useContext(TicketContext);
	const closeTicket = useCallback(() => {
		const body = document.body;
		body.style.paddingRight = '';
		body.classList.remove('_lock');
		context.menu[1](menuOpen => menuOpen = false)
		context.ticket[1](isTicketShown => isTicketShown = false);
	}, []);
	return (
		<Modal>
			<div className={classnames(styles['pop-up'], (Boolean(isTicketShown) && styles['_show']))}>
				<div
					onClick={closeTicket}
					className={styles['pop-up__bg']}
				/>
				<div className={styles['pop-up__wrapper']}>
					<div
						onClick={closeTicket}
						className={classnames(styles['pop-up__close'], '_icon-close')}
					/>
					<Ticket
						closeTicket={closeTicket}
						isTicketShown={isTicketShown}
						isTicketEditable={isTicketEditable}
					/>
				</div>
			</div>
		</Modal>
	)
}

export default AddTicketPopUp
