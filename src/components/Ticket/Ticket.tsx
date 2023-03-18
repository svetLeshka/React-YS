import { useSelector } from 'react-redux'
import styles from './styles.module.css'
import { IInitialValue } from 'typings/interfaces'
import EditTicket from 'components/EditTicket/EditTicket';

const Ticket = () => {
    const ticket = useSelector((state: IInitialValue) => state['editingTask']);
    const title = ticket.stage[0].toUpperCase() + ticket.stage.slice(1);
  return (
    <div className={styles.wrapper}>
      <p className={styles.header}>
        <span className={styles.title}>{title}</span>
        <span className={`${styles.dots} _icon-dots`}></span>
      </p>
      <div className={styles.ticket}>
        <EditTicket isEdit={false} isNew={false} isPage={true} setTicket={() => {}} />
      </div>
    </div>
  )
}

export default Ticket
