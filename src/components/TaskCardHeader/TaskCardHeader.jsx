import styles from "./styles.module.css"
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"

const TaskCardHeader = ({id}) => {
    const title = useSelector(state => state['tasks'][id].title)
  return (
    <div className={styles['header']}>
        <p className={styles['title']}>{title}</p>
        <NavLink onClick={(event) => event.stopPropagation()} to={'/full/'+id} className={`${styles['link']} _icon-dots`}/>
    </div>
  )
}

export default TaskCardHeader
