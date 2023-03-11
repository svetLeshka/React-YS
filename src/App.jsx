import SecondTask from "SecondTask/components/SecondTask/SecondTask"
import FirstTask from "FirstTask/components/FirstTask/FirstTask"
import { useSelector, useDispatch } from "react-redux"
import MainPage from "pages/MainPage/MainPage"
import { useCallback, useMemo } from "react"
import ReactDOM from "react-dom"
import { changeCheckboxStateInEditing } from "./store/appSlice"

export const App = () => {
	const dispatch = useDispatch();
	const tasks = useSelector(state => state["tasks"]);
	const com = tasks['1']['comments'][0];
	return (
		<>
			<div className="container">
				<MainPage />
			</div>
		</>
	)
}

export const Modal = ({ children }) => {
	const containerElement = useMemo(
		() => document.getElementById('pop-up'),
		[]
	);
	return ReactDOM.createPortal(children, containerElement);
}