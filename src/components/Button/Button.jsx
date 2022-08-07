import React from 'react'
import styles from './styles.module.scss';
import classnames from 'classnames';

const Button = ({ text, className, isPlusExist }) => {
	return (
		<button className={classnames(styles['btn__btn'], styles[className])}>
			{Boolean(isPlusExist) && <span className={styles['btn__with-plus']}></span>}
			<span className={styles['btn__text']}>{text}</span>
		</button>
	)
}

export default Button
