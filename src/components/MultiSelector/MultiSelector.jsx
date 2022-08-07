import React, { useState } from 'react'
import styles from './styles.module.scss';
import classnames from 'classnames';
import Selector from './Selector/Selector';

const MultiSelector = ({ selects, selected, addSelect }) => {
	const [isMenuOpen, toggleMenu] = useState(false);
	const toggler = () => toggleMenu(menu => !menu)
	return (
		<div className={styles['select__wrapper']}>
			<div
				onClick={toggler}
				className={classnames(styles['select__choose'], '_icon-arrow-down')}
			>Выбрать тег</div>
			<Selector
				selects={selects}
				selected={selected}
				addSelect={addSelect}
				isMenuOpen={isMenuOpen}
			/>
		</div>
	)
}

export default MultiSelector
