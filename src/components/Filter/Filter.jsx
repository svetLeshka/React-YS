import styles from './styles.module.css'
import Checkbox from 'components/Checkbox/Checkbox'

const Filter = ({entry, clickFn}) => {
  return (
    <label className={styles['select']} >
        <Checkbox checked={entry[1].checked} func={clickFn} name={entry[0]} action={'filters'} />
        <span className={styles['input-text']}>{entry[1].title}</span>
    </label>
  )
}

export default Filter
