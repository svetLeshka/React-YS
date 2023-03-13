import styles from './styles.module.css'
import TaskCard from 'components/TaskCard/TaskCard';
import { useSelector } from 'react-redux';
import StageButton from 'components/StageButton/StageButton';

const Stage = ({ isAddable, stage, title }) => {
    const tasks = useSelector(state => state['tasks']);
    const cardIds = Array.from(Object.keys(tasks)).filter(key => tasks[key].stage === stage);
  return (
    <div className={styles['wrapper']}>
        <p className={styles['title']}>{title}</p>
        <div className={styles['body']}>
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
