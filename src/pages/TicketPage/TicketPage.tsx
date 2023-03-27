import Ticket from 'components/Ticket/Ticket'
import styles from './style.module.css'
import { NavLink } from 'react-router-dom'

const TicketPage = () => {
  return (
    <div className={styles.wrapper}>
        <NavLink to="/" className={styles['header-wrapper']}>
            <img src="/images/arrow-return.svg" alt="return" className={styles.arrow} />
            <p className={styles.header}>Вернуться к задачам</p>
        </NavLink>
        <Ticket />
    </div>
  )
}

export default TicketPage
