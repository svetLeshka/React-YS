import React, { useCallback, useState } from 'react'
import styles from "./styles.module.css"
import TaskCardContent from 'components/TaskCardContent/TaskCardContent'
import TaskCardHeader from 'components/TaskCardHeader/TaskCardHeader'
import EditingTicketPopUp from 'components/TicketPopUp/TicketPopUp'
import { useDispatch, useSelector } from 'react-redux'
import { updateTicket } from 'store/appSlice'
import useEditingTicket from 'hooks/useEditingTicket'
import { useDrag } from 'react-dnd'
import { TaskActions, dragTypes } from 'constants/constants'
import { useNavigate, Route, Routes } from 'react-router-dom'

const TaskCard = ({id}) => {
  const [isModalShown, setModal] = useState(false);
  const toggleTicket = () => setModal(state => !state);
  const ticket = useSelector(state => state['tasks'][id]);
  const ticketEdit = useSelector(state => state['editingTask']);
  const dispatch = useDispatch();
  const updateEditingTicket = useEditingTicket(ticket);
  const updateAfterSave = useCallback(() => {
    dispatch(updateTicket({title: ticketEdit.title, desc: ticketEdit.desc, tags: ticketEdit.tags, comments: ticketEdit.comments, id: id}));
  }, [dispatch, ticketEdit.title, ticketEdit.desc, ticketEdit.tags, ticketEdit.comments, id]);
  const [{ isDragging }, drag] = useDrag(() => ({
    type: dragTypes.card,
    item: {id, stage: ticket.stage},
    collect: monitor => ({
      isDragging: Boolean(monitor.isDragging())
    })
  }), [id, ticket.stage]);
  const navigate = useNavigate();
  return (
        <div onClick={() => {
          if(!isModalShown) {
            updateEditingTicket();
            toggleTicket();
            navigate(`/${TaskActions.EDIT}/${id}`);
          }
        }}
        className={`${styles['wrapper']}${(isDragging) ? ' '+styles.draggable : ''}`} 
        ref={drag} >
            <TaskCardHeader id={id} />
            <TaskCardContent id={id} />
            <Routes>
              <Route path={`/${TaskActions.EDIT}/:id`} element={<EditingTicketPopUp setTicket={() => updateAfterSave()} isEdit={true} isNew={false} id={id} setModal={toggleTicket} />} />
            </Routes>
            {/* {Boolean(isModalShown) && <EditingTicketPopUp setTicket={() => updateAfterSave()} isEdit={true} isNew={false} id={id} setModal={toggleTicket} />} */}
        </div>
  )
}

export default TaskCard
