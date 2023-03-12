import React, { useCallback, useState } from 'react'
import styles from "./styles.module.css"
import TaskCardContent from 'components/TaskCardContent/TaskCardContent'
import TaskCardHeader from 'components/TaskCardHeader/TaskCardHeader'
import { Modal } from 'App'
import EditingTicketPopUp from 'components/TicketPopUp/TicketPopUp'
import { useDispatch, useSelector } from 'react-redux'
import { updateEditingTicketText, changeNewTagsInEditing, changeNewComsInEditing } from 'store/appSlice'

const TaskCard = ({id}) => {
  const [isModalShown, setModal] = useState(false);
  const toggleTicket = () => setModal(state => !state);
  const ticket = useSelector(state => state['tasks'][id]);
  const dispatch = useDispatch();
  const updateTicket = useCallback(()=> {
    dispatch(updateEditingTicketText({
      stage: ticket.stage,
      title: ticket.title,
      desc: ticket.desc,
    }));
    dispatch(changeNewTagsInEditing(ticket.tags));
    dispatch(changeNewComsInEditing(ticket.comments));
  }, [dispatch, ticket.stage, ticket.title, ticket.desc, ticket.tags, ticket.comments]);
  return (
        <div onClick={() => {
          if(!isModalShown) {
            updateTicket();
            toggleTicket();
          }
        }} className={styles['wrapper']}>
            <TaskCardHeader id={id} />
            <TaskCardContent id={id} />
            {Boolean(isModalShown) && <Modal><EditingTicketPopUp isEdit={true} id={id} setModal={toggleTicket} /></Modal>}
        </div>
  )
}

export default TaskCard
