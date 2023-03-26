import Button from 'components/Button/Button';
import styles from './style.module.css'
import EditingTicketPopUp from 'components/TicketPopUp/TicketPopUp';
import { ITicket } from 'typings/interfaces';
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import useEditingTicket from 'hooks/useEditingTicket';
import { updateTicket } from 'store/appSlice';
import { Route, Routes, useNavigate } from 'react-router'
import { TaskActions } from 'constants/constants';

export interface IStageButtonProps {
    stage: string,
}

const StageButton = ({ stage }: IStageButtonProps) => {
    const navigate = useNavigate();
    const [isModalShown, setModal] = useState(false);
    const dispatch = useDispatch();
    const updateEditingTicket = useEditingTicket({stage: stage, title: '', desc: '', tags: [], comments: []});
    const updateAfterSave = useCallback((ticket: ITicket) => {
        dispatch(updateTicket(ticket))
    }, [dispatch]);
  return (
    <div className={styles['btn']}>
        <Button
            clickFn={() => {
                if(!isModalShown) {
                    updateEditingTicket();
                    setModal(true);
                    navigate(`/${TaskActions.CREATE}?stage=${stage}`);
                }
            }}
            text='Добавить тикет'
            addedClass={['add-ticket']}
            isPlusExist={true}
        />
        <Routes>
            <Route path={`/${TaskActions.CREATE}`} element={<EditingTicketPopUp stage={stage} id={-1} setTicket={updateAfterSave} isEdit={false} setModal={() => setModal(false)} />} />
        </Routes>
    </div>
  )
}

export default StageButton
