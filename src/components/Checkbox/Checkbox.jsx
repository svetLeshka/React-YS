import React from 'react'
import styles from "./styles.module.css"
import { useSelector } from 'react-redux'

const Checkbox = ({checked, func, name, action}) => {
    //const checked = useSelector(state => state[action].tags.includes(name));
  return (
    <>
        <input
            className={`${styles['input']} _visually-hidden`}
            type="checkbox"
            name={name}
            checked={checked}
            onChange={() => func(name)}
            readOnly={false}
            //readOnly={Boolean(isPermanentlySelected)}
        />
        <span className={`${styles['input-check']} _icon-ok`} />
    </>
  )
}

export default Checkbox
