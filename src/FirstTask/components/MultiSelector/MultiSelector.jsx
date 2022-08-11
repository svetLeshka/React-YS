import React, { useContext, useState } from 'react'
import styles from './styles.module.scss';
import classnames from 'classnames';
import Selector from './Selector/Selector';

export const MyContext = React.createContext({});

const MultiSelector = ({ selects }) => {
	const [isTicketShown, setTicketVisibility] = useState(false);
	const [isMenuOpen, toggleMenu] = useState(false);
	const [tags, setTags] = useState([]);
	const [data, setData] = useState(() => {
		return {
			title: "",
			desc: "",
			tags: tags
		}
	});
	return (
		<div className={styles['select__wrapper']}>
			<MyContext.Provider value={
				{
					info: [data, setData],
					menu: [isMenuOpen, toggleMenu],
					ticket: [isTicketShown, setTicketVisibility],
					tags: [tags, setTags]
				}
			}>
				<Selector
					selects={selects}
				/>
			</MyContext.Provider>
		</div>
	)
}

export default MultiSelector
