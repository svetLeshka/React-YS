import Button from 'components/Button/Button';
import styles from './style.module.css'
import EditingTicketPopUp from 'components/TicketPopUp/TicketPopUp';
import { ITicket } from 'typings/interfaces';
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import useEditingTicket from 'hooks/useEditingTicket';
import { updateTicket } from 'store/appSlice';

export interface IStageButtonProps {
    stage: string,
}

const StageButton = ({ stage }: IStageButtonProps) => {
    const [isModalShown, setModal] = useState(false);
    const dispatch = useDispatch();
    const updateEditingTicket = useEditingTicket({stage: stage, title: '', desc: '', tags: [], comments: []});
    const updateAfterSave = useCallback((ticket: ITicket) => {
        dispatch(updateTicket(ticket))
    }, [dispatch])
  return (
    <div className={styles['btn']}>
        <Button
            clickFn={() => {
                if(!isModalShown) {
                    updateEditingTicket();
                    setModal(true);
                }
            }}
            text='Добавить тикет'
            addedClass={['add-ticket']}
            isPlusExist={true}
        />
        {Boolean(isModalShown) && <EditingTicketPopUp id={-1} setTicket={updateAfterSave} isEdit={false} setModal={() => setModal(false)} />}
    </div>
  )
}

export default StageButton
