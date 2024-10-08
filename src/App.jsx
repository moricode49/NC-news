import "./App.css";
import Articles from "./Articles";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Article from "./Article";
import Users from "./Users";
import { UserContext } from "./UserContext";
import { useState } from "react";
import RouteError from "./RouteError";
import TopicProvider from "./TopicProvider";

function App() {
	const [loggedInUser, setLoggedInUser] = useState({});
	const isLoggedIn = Object.keys(loggedInUser).length > 0;
	return (
		<>
			<UserContext.Provider
				value={{ loggedInUser, setLoggedInUser, isLoggedIn }}
			>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/articles" element={<Articles />} />
					<Route path="/articles/:article_id" element={<Article />} />
					<Route path="/users" element={<Users />} />
					<Route path="/topics/:topic" element={<TopicProvider />} />
					<Route path="*" element={<RouteError />} />
				</Routes>
			</UserContext.Provider>
		</>
	);
}

export default App;
