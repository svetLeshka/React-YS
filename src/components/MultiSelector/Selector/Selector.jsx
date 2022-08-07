import React from 'react'
import styles from '../styles.module.scss';
import classnames from 'classnames';
import Select from './Select/Select';

const Selector = ({ selects, selected, addSelect, isMenuOpen }) => {
	return (
		<div className={classnames(styles['select__dropdown'], (Boolean(isMenuOpen) && styles['_show']))}>
			{
				selects.map(select => {
					return (
						<Select
							key={select}
							color={select}
							selected={selected}
							addSelect={addSelect}
						/>
					)
				})
			}
		</div>
	)
}

export default Selector
