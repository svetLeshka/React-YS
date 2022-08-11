import React, { useContext, useState } from 'react'
import styles from '../../styles.module.scss'
import Tag from 'FirstTask/components/Tags/Tag/Tag'
import Checkbox from 'FirstTask/components/Checkbox/Checkbox'
import { MyContext } from '../../MultiSelector';

const Select = ({ color }) => {
	const context = useContext(MyContext);
	const [curTags, setTags] = context.tags;
	const isSelected = curTags.includes(color);
	const toggleSelect = () => {
		setTags(selectedList => {
			let newSelects;
			if (selectedList.includes(color)) {
				selectedList.splice(selectedList.indexOf(color), 1);
			} else {
				selectedList.push(color);
			}
			newSelects = [...selectedList];
			return newSelects;
		});
	}
	return (
		<div className={styles['select__select']} onClick={toggleSelect}>
			<Tag color={color} w="90px" h="24px" />
			<Checkbox message="" isPermanentlySelected={true} isShown={isSelected} />
		</div>
	)
}

export default Select
