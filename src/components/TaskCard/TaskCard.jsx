import React from 'react'
import styles from "./styles.module.css"
import TaskCardContent from 'components/TaskCardContent/TaskCardContent'
import TaskCardHeader from 'components/TaskCardHeader/TaskCardHeader'

const TaskCard = ({id}) => {
  return (
        <div onClick={() => console.log('object')} className={styles['wrapper']}>
            <TaskCardHeader id={id} />
            <TaskCardContent id={id} />
        </div>
  )
}

export default TaskCard
