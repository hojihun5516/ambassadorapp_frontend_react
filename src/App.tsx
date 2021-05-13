import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Header from "./components/Header";
import { BrowserRouter, Route } from "react-router-dom";
import ProductsFrontend from "./pages/ProductsFrontend";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Stats from "./pages/Stats";
import Rankings from "./pages/Rankings";
import ProductsBackend from "./pages/ProductsBackend";
function App() {
	return (
		<BrowserRouter>
			<Route path={"/"} exact component={ProductsFrontend}></Route>
			<Route path={"/backend"} exact component={ProductsBackend}></Route>
			<Route path={"/login"} component={Login}></Route>
			<Route path={"/register"} component={Register}></Route>
			<Route path={"/profile"} component={Profile}></Route>
			<Route path={"/stats"} component={Stats}></Route>
			<Route path={"/rankings"} component={Rankings}></Route>
		</BrowserRouter>
	);
}

export default App;
