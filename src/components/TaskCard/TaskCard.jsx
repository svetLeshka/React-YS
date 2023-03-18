import React, { useCallback, useState } from 'react'
import styles from "./styles.module.css"
import TaskCardContent from 'components/TaskCardContent/TaskCardContent'
import TaskCardHeader from 'components/TaskCardHeader/TaskCardHeader'
import EditingTicketPopUp from 'components/TicketPopUp/TicketPopUp'
import { useDispatch, useSelector } from 'react-redux'
import { updateEditingTicketText, changeNewTagsInEditing, changeNewComsInEditing, updateTicket } from 'store/appSlice'
import useEditingTicket from 'hooks/useEditingTicket'

const TaskCard = ({id}) => {
  const [isModalShown, setModal] = useState(false);
  const toggleTicket = () => setModal(state => !state);
  const ticket = useSelector(state => state['tasks'][id]);
  const dispatch = useDispatch();
  const updateEditingTicket = useEditingTicket(ticket);
  const updateAfterSave = useCallback((ticket) => {
    dispatch(updateTicket(ticket))
  }, [dispatch])
  return (
        <div onClick={() => {
          if(!isModalShown) {
            updateEditingTicket();
            toggleTicket();
          }
        }} className={styles['wrapper']}>
            <TaskCardHeader id={id} />
            <TaskCardContent id={id} />
            {Boolean(isModalShown) && <EditingTicketPopUp setTicket={(ticket) => updateAfterSave(ticket)} isEdit={true} isNew={false} id={id} setModal={toggleTicket} />}
        </div>
  )
}

export default TaskCard
