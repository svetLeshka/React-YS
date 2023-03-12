import Filters from 'components/Filters/Filters';
import styles from './styles.module.css'
import Stage from 'components/Stage/Stage';
import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { changeFilterState } from 'store/appSlice';

const MainPage = () => {
    const dispatch = useDispatch();
  return (
    <div className={styles['second-task']}>
        <Filters />
        <div className={styles['progress']}>
            <Stage isAddable={true} stage={'todo'} title={'Todo'} />
            <Stage isAddable={true} stage={'progress'} title={'In progress'} />
            <Stage isAddable={false} stage={'done'} title={'Done'} />
        </div>
    </div>
  )
}

export default MainPage
