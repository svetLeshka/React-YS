import { useSelector, useDispatch } from "react-redux"
import MainPage from "./pages/MainPage/MainPage"
import { useCallback, useMemo } from "react"
import ReactDOM from "react-dom"
import TicketPage from "components/TicketPage/TicketPage"

export const App = () => {
	const dispatch = useDispatch();
	return (
		<>
			<div className="container">
				{/* <MainPage /> */}
				<TicketPage id={2} />
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