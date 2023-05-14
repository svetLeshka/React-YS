import React, { useContext, useState } from 'react'
import styles from './styles.module.scss';
import classnames from 'classnames';
import Selector from './Selector/Selector';
import ChosenTags from './ChosenTags/ChosenTags';

const MultiSelector = ({ selects }) => {
	return (
		<div className={styles['select__wrapper']}>
			<ChosenTags selectedTags={[]} />
			<Selector
				selects={selects}
			/>
		</div>
	)
}

export default MultiSelector
