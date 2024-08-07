import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

export default function Header() {
	const { loggedInUser } = useContext(UserContext);
	return (
		<>
			<h1>Welcome to NC News</h1>
			<nav>
				<p>
					<span id="logged-in-welcome">Welcome </span>
					{loggedInUser.username}
				</p>
				<img
					className="welcome-user-img"
					src={loggedInUser.avatar_url}
					alt=""
				/>
				<section>
					<Link to="/">Home</Link>
					<Link to="/articles">Articles</Link>
					<Link to="/users">Users</Link>
				</section>
			</nav>
		</>
	);
}
