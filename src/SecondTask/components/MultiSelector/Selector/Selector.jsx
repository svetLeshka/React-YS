import React, { useContext } from 'react'
import styles from '../styles.module.scss';
import classnames from 'classnames';
import Select from './Select/Select';
import { TicketContext } from 'SecondTask/components/SecondTask/SecondTask';

const Selector = ({ selects }) => {
	const context = useContext(TicketContext);
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
