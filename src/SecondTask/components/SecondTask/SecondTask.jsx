import React, { useCallback, useState } from 'react'
import AddTicketPopUp from 'SecondTask/components/TicketPopUp/TicketPopUp'
import styles from './styles.module.scss'
import Checkbox from 'SecondTask/components/Checkbox/Checkbox'
import Stage from 'SecondTask/components/Stage/Stage'

// @ts-ignore
export const TicketContext = React.createContext();
const MemoizedStage = React.memo(Stage);

//data
const progresses = {
	todo: {
		title: "Todo",
		cards: [
			{
				id: 0,
				title: "Нарисовать иллюстрации",
				description: "qweqweqweqweqwe",
				tags: ["violet", "green", "red", "orange", "blue", "light-green", "dark-blue", "yellow"],
				isComAppear: true,
				isDescAppear: true
			},
			{
				id: 1,
				title: "Сверстать лендинг по готовому шаблону",
				description: "qweqweqweqweqwe",
				tags: ["violet", "green", "red", "orange"],
				isComAppear: true,
				isDescAppear: true
			},
			{
				id: 2,
				title: "Сверстать лендинг по готовому шаблону",
				description: "qweqweqweqweqwe",
				tags: ["blue", "light-green", "dark-blue", "yellow"],
				isComAppear: false,
				isDescAppear: true
			},
			{
				id: 3,
				title: "Нарисовать иллюстрации",
				description: "qweqweqweqweqwe",
				tags: ["blue", "light-green", "dark-blue"],
				isComAppear: true,
				isDescAppear: true
			},
		]
	},
	inProgress: {
		title: "In progress",
		cards: [
			{
				id: 4,
				title: "Нарисовать иллюстрации",
				description: "qweqweqweqweqwe",
				tags: ["orange", "light-green", "dark-blue", "yellow", "violet", "green", "red", "blue"],
				isComAppear: true,
				isDescAppear: true
			},
			{
				id: 5,
				title: "Сверстать лендинг по готовому шаблону",
				description: "qweqweqweqweqwe",
				tags: ["orange", "light-green", "dark-blue"],
				isComAppear: true,
				isDescAppear: true
			},
			{
				id: 6,
				title: "Нарисовать иллюстрации",
				description: "qweqweqweqweqwe",
				tags: ["light-green", "dark-blue"],
				isComAppear: true,
				isDescAppear: true
			},
		]
	},
	done: {
		title: "Done",
		cards: [
			{
				id: 7,
				title: "Сверстать лендинг по готовому шаблону",
				description: "qweqweqweqweqwe",
				tags: ["violet", "green", "red", "blue"],
				isComAppear: true,
				isDescAppear: true
			},
			{
				id: 8,
				title: "Нарисовать иллюстрации",
				description: "qweqweqweqweqwe",
				tags: ["light-green", "dark-blue"],
				isComAppear: true,
				isDescAppear: true
			},
			{
				id: 9,
				title: "Сверстать лендинг по готовому шаблону",
				description: "qweqweqweqweqwe",
				tags: ["orange", "light-green", "dark-blue"],
				isComAppear: true,
				isDescAppear: true
			},
			{
				id: 10,
				title: "Нарисовать иллюстрации",
				description: "qweqweqweqweqwe",
				tags: ["orange", "light-green", "dark-blue", "yellow", "violet", "green", "red", "blue"],
				isComAppear: true,
				isDescAppear: true
			},
			{
				id: 11,
				title: "Нарисовать иллюстрации",
				description: "qweqweqweqweqwe",
				tags: ["light-green", "dark-blue"],
				isComAppear: true,
				isDescAppear: true
			},
		]
	}
}

const SecondTask = () => {
	//show/hide ticket
	const [isTicketShown, setTicketVisibility] = useState(false);
	const [isMenuOpen, toggleMenu] = useState(false);
	const toggleTicket = useCallback(() => {
		const body = document.body;
		body.style.paddingRight = (body.style.paddingRight)
			? ''
			: window.innerWidth - body.clientWidth + 'px';
		body.classList.toggle('_lock');
		setTicketVisibility(isTicketShown => !isTicketShown);
		toggleMenu(menu => menu = false);
	}, []);

	//add/edit ticket
	const [isTicketEditable, setTicketState] = useState(false);

	//transfer data
	const [tags, setTags] = useState([]);
	const [data, setData] = useState(() => {
		return {
			title: "",
			desc: "",
			tags: tags
		}
	});

	return (
		<div className={styles['second-task']}>
			<div className={styles['second-task__filter']}>
				<Checkbox message="Комментарий" />
				<Checkbox message="Описание" />
				<Checkbox message="Тег" />
			</div>
			<div className={styles['second-task__progress']}>
				<TicketContext.Provider value={
					{
						info: [data, setData],
						menu: [isMenuOpen, toggleMenu],
						ticket: [isTicketShown, setTicketVisibility],
						tags: [tags, setTags]
					}
				}>
					<MemoizedStage
						isStageAddable={true}
						cards={progresses.todo}
						showTicket={toggleTicket}
						setTicketState={setTicketState}
						setData={setData}
					/>
					<MemoizedStage
						isStageAddable={true}
						cards={progresses.inProgress}
						showTicket={toggleTicket}
						setTicketState={setTicketState}
						setData={setData}
					/>
					<MemoizedStage
						isStageAddable={false}
						cards={progresses.done}
						showTicket={toggleTicket}
						setTicketState={setTicketState}
						setData={setData}
					/>
					<AddTicketPopUp
						isTicketShown={isTicketShown}
						isTicketEditable={isTicketEditable}
					/>
				</TicketContext.Provider>
			</div>
		</div>
	)
}

export default SecondTask