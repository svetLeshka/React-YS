import { useState } from "react"
import styles from "./styles.module.css"
import { useSelector } from "react-redux"

const TaskCardHeader = ({id}) => {
    const [isModal, setModal] = useState(false);
    const title = useSelector(state => state['tasks'][id].title)
  return (
    <div className={styles['header']}>
        <p className={styles['title']}>{title}</p>
        <div className={`${styles['link']} _icon-dots`}>
           {/*  <div className={`${styles['modal']} ${(Boolean(isModal)) ? 'show' : ''}`}>
                <div className={`${styles['close']} _icon-close`}></div>
                <p className={styles['text']}>Удалить</p>
                <p className={styles['text']}>Редактировать</p>
            </div> */}
        </div>
    </div>
  )
}

export default TaskCardHeader
