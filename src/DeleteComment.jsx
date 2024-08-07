import { useState } from "react";
import { deleteComment } from "./api";

export default function DeleteComment({ comment_id }) {
	const [deletedComment, setDeletedComment] = useState("");
	function handleDelete(e) {
		setDeletedComment(e.target.value);
		deleteComment(e.target.value);
	}

	if (deletedComment) {
		return <p>Comment deleted!</p>;
	}
	return (
		<button onClick={handleDelete} value={comment_id}>
			Delete comment
		</button>
	);
}
