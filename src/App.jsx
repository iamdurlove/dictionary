import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Data from "./pages/Data";
import Search from "./pages/Search";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="data/:id" element={<Data />} />
				<Route path="search" element={<Search />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
