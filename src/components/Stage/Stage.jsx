import styles from './styles.module.css'
import TaskCard from 'components/TaskCard/TaskCard';
import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import StageButton from 'components/StageButton/StageButton';
import { useDrop } from 'react-dnd';
import { dragTypes } from 'constants/constants';
import { changeCardStage } from 'store/appSlice';

const Stage = ({ isAddable, stage, title }) => {
    const tasks = useSelector(state => state['tasks'], () => false);
    const cardIds = Array.from(Object.keys(tasks)).filter(key => tasks[key].stage === stage);
    const dispatch = useDispatch();
    const changeStage = useCallback((id, stageTask) => {
        if(stageTask !== stage) dispatch(changeCardStage({id: id, stage: stage}))
    }, [dispatch, stage]);
    const [{ isOver }, drop] = useDrop(() => ({
        accept: dragTypes.card,
        drop: (item) => changeStage(item.id, item.stage),
        collect: monitor => ({
            isOver: Boolean(monitor.isOver()) && Boolean(monitor.getItem()?.stage !== stage)
        })
    }), [stage]);
  return (
    <div className={styles['wrapper']}>
        <p className={styles['title']}>{title}</p>
        <div className={`${styles['body']}${(isOver) ? ' '+styles.over : ''}`} ref={drop}>
            {
                Boolean(cardIds.length !== 0) &&
                cardIds.map(id => {
                    return (
                        <TaskCard key={id} id={id} />
                    )
                })
            }
            {
                Boolean(isAddable) &&
                <StageButton stage={stage} />
            }
        </div>
    </div>
  )
}

export default Stage
