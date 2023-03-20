import React, { useCallback, useState } from 'react'
import styles from "./styles.module.css"
import TaskCardContent from 'components/TaskCardContent/TaskCardContent'
import TaskCardHeader from 'components/TaskCardHeader/TaskCardHeader'
import EditingTicketPopUp from 'components/TicketPopUp/TicketPopUp'
import { useDispatch, useSelector } from 'react-redux'
import { updateTicket } from 'store/appSlice'
import useEditingTicket from 'hooks/useEditingTicket'

const TaskCard = ({id}) => {
  const [isModalShown, setModal] = useState(false);
  const toggleTicket = () => setModal(state => !state);
  const ticket = useSelector(state => state['tasks'][id]);
  const ticketEdit = useSelector(state => state['editingTask']);
  const dispatch = useDispatch();
  const updateEditingTicket = useEditingTicket(ticket);
  const updateAfterSave = useCallback(() => {
    dispatch(updateTicket({title: ticketEdit.title, desc: ticketEdit.desc, tags: ticketEdit.tags, comments: ticketEdit.comments, id: id}));
  }, [dispatch, ticketEdit.title, ticketEdit.desc, ticketEdit.tags, ticketEdit.comments, id])
  return (
        <div onClick={() => {
          if(!isModalShown) {
            updateEditingTicket();
            toggleTicket();
          }
        }} className={styles['wrapper']}>
            <TaskCardHeader id={id} />
            <TaskCardContent id={id} />
            {Boolean(isModalShown) && <EditingTicketPopUp setTicket={() => updateAfterSave()} isEdit={true} isNew={false} id={id} setModal={toggleTicket} />}
        </div>
  )
}

export default TaskCard
