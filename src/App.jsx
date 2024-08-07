import "./App.css";
import Articles from "./Articles";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Article from "./Article";
import NewComment from "./NewComment";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/articles" element={<Articles />} />
				<Route path="/articles/:article_id" element={<Article />} />
				{/* <Route
					path="/articles/:article_id/new-comment"
					element={<NewComment />}
				/> */}
			</Routes>
		</>
	);
}

export default App;
