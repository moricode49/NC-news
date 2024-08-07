import { useContext, useState } from "react";
import { postComment } from "./api";
import { useParams } from "react-router-dom";
import Comments from "./Comments";
import "./NewComment.css";
import { UserContext } from "./UserContext";

export default function NewComment() {
	const { loggedInUser } = useContext(UserContext);
	const { article_id } = useParams();
	const [comment, setComment] = useState("");
	const [commentResponse, setCommentResponse] = useState("");

	function handleChange(e) {
		setComment(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		postComment(article_id, loggedInUser.username, comment)
			.then(() => {
				setCommentResponse("posted");
			})
			.catch(() => {
				setCommentResponse("unsuccessful");
			});
		setComment("");
	}

	if (commentResponse === "posted") {
		return (
			<>
				<p id="posted">Posted!</p>
				<Comments />
			</>
		);
	} else if (commentResponse === "unsuccessful") {
		return (
			<>
				<p>Unsuccessful!</p>
				<Comments />
			</>
		);
	}

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="comment"></label>
			<input
				id="comment"
				type="text"
				placeholder="Leave your comments"
				onChange={handleChange}
				value={comment}
				required
			/>
			<button type="submit">Submit</button>
		</form>
	);
}
