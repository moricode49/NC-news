import { Link } from "react-router-dom";

export default function Header() {
	return (
		<>
			<h1>Welcome to NC News</h1>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/articles">Articles</Link>
			</nav>
		</>
	);
}
