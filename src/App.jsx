import MainPage from "./pages/MainPage/MainPage"
import { useMemo } from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ReactDOM from "react-dom"
import TicketPage from "pages/TicketPage/TicketPage"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

export const App = () => {
	return (
		<BrowserRouter>
			<div className="container">
				<DndProvider backend={HTML5Backend} >
					<Routes>
						<Route path="/full">
							<Route path=":id/*" element={<TicketPage />} />
						</Route>
						<Route path="/*" element={<MainPage />} />
					</Routes>
				</DndProvider>
			</div>
		</BrowserRouter>
	)
}

export const Modal = ({ children }) => {
	const containerElement = useMemo(
		() => document.getElementById('pop-up'),
		[]
	);
	return ReactDOM.createPortal(children, containerElement);
}