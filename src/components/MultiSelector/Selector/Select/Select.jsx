import React, { useState } from 'react'
import styles from '../../styles.module.scss'
import Tag from 'components/Tags/Tag/Tag'
import Checkbox from 'components/Checkbox/Checkbox'

const Select = ({ color, selected, addSelect }) => {
	const [isSelected, setSelect] = useState(selected.hasOwnProperty(color));
	const toggleSelect = () => {
		addSelect(selectedList => {
			if (selectedList.hasOwnProperty(color)) {
				delete selectedList[color];
				return selectedList;
			} else {
				selectedList[color] = color;
				return selectedList;
			}
		});
		setSelect(isSelected => !isSelected);
	}
	return (
		<div className={styles['select__select']} onClick={toggleSelect}>
			<Tag color={color} w="90px" h="24px" />
			<Checkbox message="" isPermanentlySelected={true} isShown={isSelected} />
		</div>
	)
}

export default Select
