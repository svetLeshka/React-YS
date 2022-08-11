import React, { useRef, useState } from 'react'
import styles from './styles.module.scss'

const TextInput = ({ isTextArea }) => {
	const [focus, setFocus] = useState(true);
	const ref = useRef(null);
	const toggleFocus = () => {
		setFocus(curFocus => curFocus = !curFocus);
		ref.current.style.boxShadow = (focus) ? '0 0 1px 0 #333' : '';
	};
	return (
		<label ref={ref} className={styles['text-input__label']}>
			{
				(Boolean(isTextArea) &&
					<textarea
						onFocus={toggleFocus}
						onBlur={toggleFocus}
						className={styles['text-input__textarea']}
						placeholder='Описание'
						rows={9}
					/>) ||
				<input
					onFocus={toggleFocus}
					onBlur={toggleFocus}
					className={styles['text-input__text']}
					type="text"
					placeholder='Название'
				/>
			}
		</label>
	)
}

export default TextInput
