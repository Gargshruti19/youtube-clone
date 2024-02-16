import React, { useState } from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/homescreen/HomeScreen";
import "./_app.scss";

import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from "react-router-dom";

const Layout = ({ children }) => {
	const [sidebar, setSidebar] = useState(false);

	const handleToggleSidebar = () => {
		setSidebar(!sidebar);
	};

	return (
		<>
			<Header handleToggleSidebar={handleToggleSidebar} />
			<div className="app__container">
				<Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
				<Container fluid className="app__main ">
					{children}
				</Container>
			</div>
		</>
	);
};

const App = () => {
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={
						<Layout>
							<HomeScreen />
						</Layout>
					}
				/>
				<Route
					path="/search"
					element={
						<Layout>
							<h1>Search</h1>
						</Layout>
					}
				/>
				<Route path="*" element={<Navigate to="/" />} />
			</Routes>
		</Router>
	);
};

export default App;
