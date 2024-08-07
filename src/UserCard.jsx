import { useContext, useState } from "react";
import { UserContext } from "./UserContext";

export default function UserCard(user) {
	// const [loginPrompt, setLoginPrompt] = useState("");
	const { setLoggedInUser } = useContext(UserContext);

	function handleClick() {
		setLoggedInUser(user);
		// setLoginPrompt(username);
	}
	return (
		<>
			<div className="user-cards">
				<p>{user.username}</p>
				<img className="avatar" src={user.avatar_url} alt="" />
				<button onClick={handleClick}>Log In</button>
			</div>
		</>
	);
}
