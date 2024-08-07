import { useEffect, useState } from "react";
import { fetchAllUsers } from "./api";
import UserCard from "./UserCard";
import "./Users.css";

export default function Users() {
	const [users, setUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetchAllUsers().then(({ users }) => {
			setUsers(users);
			setIsLoading(false);
		});
	}, []);

	if (isLoading) {
		return <img src="../loading.svg" alt="loading animation" />;
	}

	return users.map((user) => {
		return (
			<UserCard
				key={user.username}
				username={user.username}
				avatar_url={user.avatar_url}
			/>
		);
	});
}
