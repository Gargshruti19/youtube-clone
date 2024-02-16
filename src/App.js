import React from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/homescreen/HomeScreen";

const App = () => {
	return (
		<>
			<Header />
			<div className="app_container">
				<Sidebar />
				<Container fluid className="app__main">
					<HomeScreen />
				</Container>
			</div>
		</>
	);
};

export default App;
