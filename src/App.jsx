import SecondTask from "SecondTask/components/SecondTask/SecondTask"
import FirstTask from "FirstTask/components/FirstTask/FirstTask"
import { useSelector, useDispatch } from "react-redux"
import MultiSelector from "components/MultiSelector/MultiSelector"
import ChosenTags from "components/ChosenTags/ChosenTags"
import { useCallback, useMemo } from "react"
import ReactDOM from "react-dom"
import { changeCheckboxStateInEditing } from "./store/appSlice"

export const App = () => {
	const dispatch = useDispatch();
	const tasks = Object.entries(useSelector(state => state["tasks"]));
	return (
		<>
			<div className="container">
				<ChosenTags />
				<MultiSelector />
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