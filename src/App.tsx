import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import { BrowserRouter, Route } from "react-router-dom";
import ProductsFrontend from "./pages/ProductsFrontend";
function App() {
	return (
		<BrowserRouter>
			<Route path={"/"} component={ProductsFrontend}></Route>
		</BrowserRouter>
	);
}

export default App;
