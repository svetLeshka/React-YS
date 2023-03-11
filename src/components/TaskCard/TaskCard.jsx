import React, { useState } from 'react'
import styles from "./styles.module.css"
import TaskCardContent from 'components/TaskCardContent/TaskCardContent'
import TaskCardHeader from 'components/TaskCardHeader/TaskCardHeader'
import { Modal } from 'App'
import EditingTicketPopUp from 'components/TicketPopUp/TicketPopUp'

const TaskCard = ({id}) => {
  const [isModalShown, setModal] = useState(false);
  const toggleTicket = () => setModal(state => !state);
  return (
        <div onClick={() => (!isModalShown) ? toggleTicket() : null} className={styles['wrapper']}>
            <TaskCardHeader id={id} />
            <TaskCardContent id={id} />
            {Boolean(isModalShown) && <Modal><EditingTicketPopUp id={id} setModal={toggleTicket} /></Modal>}
        </div>
  )
}

export default TaskCard
