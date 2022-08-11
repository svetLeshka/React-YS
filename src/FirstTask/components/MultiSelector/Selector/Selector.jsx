import React, { useState, useCallback, useContext } from 'react'
import styles from '../styles.module.scss';
import classnames from 'classnames';
import Select from './Select/Select';
import { MyContext } from '../MultiSelector';

const Selector = ({ selects }) => {
	const context = useContext(MyContext);
	const [isMenuOpen, toggleMenu] = context.menu;
	const toggler = () => toggleMenu(menu => !menu);
	return (
		<>
			<div
				onClick={toggler}
				className={classnames(styles['select__choose'], '_icon-arrow-down')}
			>Выбрать тег</div>
			<div className={classnames(styles['select__dropdown'], (Boolean(isMenuOpen) && styles['_show']))}>
				{
					selects.map(select => {
						return (
							<Select
								key={select}
								color={select}
							/>
						)
					})
				}
			</div>
		</>
	)
}

export default Selector
