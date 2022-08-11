import classnames from 'classnames'
import React from 'react'
import styles from './styles.module.scss'

const Checkbox = ({ message, isPermanentlySelected = null, isShown = true }) => {
	const clickHahdler = (e) => (isPermanentlySelected) ? e.preventDefault() : null; //prevent double click on selector
	return (
		<label onClick={clickHahdler} className={`${styles['checkbox__item']} ${Boolean(isShown) ? styles['_show'] : ''}`}>
			<input
				className={classnames(styles['checkbox__input'], '_visually-hidden')}
				type="checkbox"
				checked={isPermanentlySelected}
				readOnly={Boolean(isPermanentlySelected)}
			/>
			<span className={classnames(styles['checkbox__input-check'], '_icon-ok')} />
			{Boolean(message) && <span className={styles['checkbox__input-text']}>{message}</span>}
		</label>
	)
}

export default Checkbox
