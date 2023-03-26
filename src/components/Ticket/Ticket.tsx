import { useDispatch, useSelector } from 'react-redux'
import {useEffect} from 'react'
import styles from './styles.module.css'
import { IInitialValue, ITicket } from 'typings/interfaces'
import EditTicket from 'components/EditTicket/EditTicket';
import { useCallback, useState } from 'react';
import Dots from 'components/Dots/Dots';
import { updateEditingTicket, updateTicket } from 'store/appSlice';
import { useParams } from 'react-router';

const Ticket = () => {
    const {id} = useParams();
    const ticketq: ITicket = useSelector((state: IInitialValue) => state['tasks'][Number(id)]);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(updateEditingTicket({...ticketq, id: id}))
     }, [dispatch, ticketq.stage, ticketq.title, ticketq.desc, ticketq.tags, ticketq.comments, ticketq, id]);
    const ticket = useSelector((state: IInitialValue) => state['editingTask']);
    const title = ticket.stage[0].toUpperCase() + ticket.stage.slice(1);
    const [edit, setEdit] = useState(false);
    const editTicket = useCallback(() => {
      setEdit(false);
      dispatch(updateTicket({title: ticket.title, desc: ticket.desc, tags: ticket.tags, comments: ticket.comments, id: id}));
    }, [dispatch, ticket.title, ticket.desc, ticket.tags, ticket.comments, id])
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.title}>{title}</span>
        <Dots isEdit={edit} setEdit={setEdit} />
      </div>
      <div className={styles.ticket}>
        <EditTicket isEdit={edit} isNew={false} isPage={true} setTicket={editTicket} />
      </div>
    </div>
  )
}

export default Ticket
