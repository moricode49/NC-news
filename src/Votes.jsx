import { useEffect, useState } from "react";
import "./Votes.css";
import { useParams } from "react-router-dom";
import { giveVotes } from "./api";

export default function Votes({ votes }) {
	const { article_id } = useParams();
	const [optimisticVotes, setOptimisticVotes] = useState(0);
	const [error, setError] = useState("");

	useEffect(() => {
		setOptimisticVotes(votes);
	}, []);

	function handleVotes(event) {
		const upDownVote = event.target.id;
		setOptimisticVotes((currVotes) => {
			if (upDownVote === "upvote") {
				return currVotes + 1;
			} else {
				return currVotes - 1;
			}
		});
		giveVotes(article_id, upDownVote).catch((error) => {
			setOptimisticVotes((currVotes) => {
				if (upDownVote === "upvote") {
					return currVotes + 1;
				} else {
					return currVotes - 1;
				}
			});
			setError("vote unsuccessful");
		});
	}

	return (
		<>
			<p>Votes: {optimisticVotes}</p>
			<button id="upvote" onClick={handleVotes}>
				Upvote!
			</button>
			<button id="downvote" onClick={handleVotes}></button>
			{error ? <p>{error}</p> : null}
		</>
	);
}
