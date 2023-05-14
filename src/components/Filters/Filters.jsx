import React from 'react'
import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { changeFilterState } from 'store/appSlice';
import styles from './styles.module.css'
import Filter from 'components/Filter/Filter';

const Filters = () => {
    const dispatch = useDispatch();
    const setFilter = useCallback((filter) => {
        dispatch(changeFilterState(filter));
    }, [dispatch])
    const filters = useSelector(state => state['filters']);
    if(filters) {
        return (
            <div className={styles['filter']}>
                {
                    Array.from(Object.entries(filters)).map(filter => {
                        return (
                            <Filter key={filter[0]} entry={filter} clickFn={setFilter} />
                        )
                    })
                }
            </div>
          )
    } else {
        return (
            <></>
        )
    }
}

export default Filters
