import { useState } from "react";
import { postComment } from "./api";
import { useParams } from "react-router-dom";
import Comments from "./Comments";
import "./NewComment.css";

export default function NewComment() {
	const { article_id } = useParams();
	const [comment, setComment] = useState("");
	const [commentResponse, setCommentResponse] = useState("");

	function handleChange(e) {
		setComment(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		postComment(article_id, comment).then((response) => {
			if (response.message === "Network Error") {
				setCommentResponse("network-error");
			} else if (response) {
				setCommentResponse("posted");
			}
		});
		setComment("");
	}

	if (commentResponse === "network-error") {
		return <p id="network-error">Network Error</p>;
	} else if (commentResponse === "posted") {
		return (
			<>
				<p id="posted">Posted!</p>
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
