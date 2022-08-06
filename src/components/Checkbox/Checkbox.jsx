import classnames from 'classnames'
import React from 'react'
import styles from './styles.module.scss'

const Checkbox = ({ message }) => {
	return (
		<label className={styles['checkbox__item']}>
			<input className={classnames(styles['checkbox__input'], '_visually-hidden')} type="checkbox" />
			<span className={classnames(styles['checkbox__input-check'], '_icon-ok')} />
			<span className={styles['checkbox__input-text']}>{message}</span>
		</label>
	)
}

export default Checkbox
