import { useCallback, useState } from "react"
import styles from './style.module.css'
import { colors } from "constants/constants";
import Tag from "components/Tag/Tag";
import Checkbox from "components/Checkbox/Checkbox";
import { useSelector, useDispatch } from "react-redux";
import { changeCheckboxStateInEditing } from "store/appSlice";


const MultiSelector = () => {
    const [isOpen, setOpen] = useState(false);
    const dispatch = useDispatch();
    const setTag = useCallback((tag) => {
        dispatch(changeCheckboxStateInEditing(tag));
    }, [dispatch])
    const tags = useSelector(state => state['editingTask'].tags);
  return (
    <div className={styles['wrapper']}>
        <div
            onClick={() => setOpen(state => !state)}
            className={`${styles['choose']} _icon-arrow-down`}
        >Выбрать тег</div>
        <div className={`${styles['dropdown']}${(Boolean(isOpen) ? ' '+styles['_show'] : '')}`}>
            {
                Array.from(Object.entries(colors)).map(entry => {
                    const checked = tags.includes(entry[0]);
                    return (
                        <label key={entry[0]} className={styles['select']} onClick={() => {}}>
                            <Tag color={entry[1]} w="90px" h="24px" />
                            <Checkbox checked={checked} func={() => setTag(entry[0])} name={entry[0]} action={'editingTask'} />
                        </label>
                    )
                })
            }
        </div>
    </div>
  )
}

export default MultiSelector
