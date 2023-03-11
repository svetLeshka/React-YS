import styles from './styles.module.css'
import Filter from 'components/Filter/Filter';
import Stage from 'components/Stage/Stage';
import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { changeFilterState } from 'store/appSlice';

const MainPage = () => {
    const dispatch = useDispatch();
    const setFilter = useCallback((filter) => {
        dispatch(changeFilterState(filter));
    }, [dispatch])
    const filters = useSelector(state => state['filters']);
  return (
    <div className={styles['second-task']}>
        <div className={styles['filter']}>
            {
                Array.from(Object.entries(filters)).map(filter => {
                    return (
                        <Filter key={filter[0]} entry={filter} clickFn={setFilter} />
                    )
                })
            }
        </div>
        <div className={styles['progress']}>
            <Stage isAddable={true} stage={'todo'} title={'Todo'} />
            <Stage isAddable={true} stage={'progress'} title={'In progress'} />
            <Stage isAddable={false} stage={'done'} title={'Done'} />
        </div>
    </div>
  )
}

export default MainPage
