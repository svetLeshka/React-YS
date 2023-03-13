import Tag from "components/Tag/Tag"
import styles from "./styles.module.css"
import { useSelector } from "react-redux"
import { Colors } from "constants/constants"

const TaskCardContent = ({id}) => {
    const card = useSelector(state => state['tasks'][id]);
  return (
    <div className={styles['content']}>
        <div className={styles['tags']}>
            {
                card.tags.map(tag => {
                    return <Tag key={tag} color={Colors[tag]} w="40px" h="18px" />
                })
            }
        </div>
        <div className={styles['info']}>
            {Boolean(card.comments.length !== 0) && <div className={`${styles['com']} _icon-comment`} />}
            {Boolean(card.desc.length !== 0) && <div className={`${styles['desc']} _icon-description`} />}
        </div>
    </div>
  )
}

export default TaskCardContent
