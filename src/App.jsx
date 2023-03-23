import { useSelector, useDispatch } from "react-redux"
import MainPage from "./pages/MainPage/MainPage"
import { useCallback, useMemo } from "react"
import ReactDOM from "react-dom"
import TicketPage from "components/TicketPage/TicketPage"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

export const App = () => {
	const dispatch = useDispatch();
	return (
		<>
			<div className="container">
				<DndProvider backend={HTML5Backend} >
					<MainPage />
					<TicketPage id={2} />
				</DndProvider>
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