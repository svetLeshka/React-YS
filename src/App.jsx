import SecondTask from "SecondTask/components/SecondTask/SecondTask"
import FirstTask from "FirstTask/components/FirstTask/FirstTask"
import { useMemo } from "react"
import ReactDOM from "react-dom"

export const App = () => {
	return (
		<>
			<div className="container">
				{/* <FirstTask /> */}
				{<SecondTask />}
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