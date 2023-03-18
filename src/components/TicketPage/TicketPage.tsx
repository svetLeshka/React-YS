import Ticket from 'components/Ticket/Ticket'
import styles from './style.module.css'

const TicketPage = () => {
  return (
    <div className={styles.wrapper}>
        <a href="#!" className={styles['header-wrapper']}>
            <img src="/images/arrow-return.svg" alt="return" className={styles.arrow} />
            <p className={styles.header}>Вернуться к задачам</p>
        </a>
        <Ticket />
    </div>
  )
}

export default TicketPage
