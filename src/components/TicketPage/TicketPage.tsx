import Ticket from 'components/Ticket/Ticket'
import styles from './style.module.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useCallback } from 'react'
import { IInitialValue, ITicket } from 'typings/interfaces'
import { updateEditingTicket } from 'store/appSlice'

export interface ITicketPageProps {
  id: number
}

const TicketPage = ({ id }: ITicketPageProps) => {
  const ticket: ITicket = useSelector((state: IInitialValue) => state['tasks'][id]);
  const dispatch = useDispatch();
  //eslint-disable-next-line
  useState(useCallback(() => dispatch(updateEditingTicket({...ticket, id: id})), [dispatch, {...ticket}, id]));
  return (
    <div className={styles.wrapper}>
        <a href="#!" className={styles['header-wrapper']}>
            <img src="/images/arrow-return.svg" alt="return" className={styles.arrow} />
            <p className={styles.header}>Вернуться к задачам</p>
        </a>
        <Ticket id={id} />
    </div>
  )
}

export default TicketPage
