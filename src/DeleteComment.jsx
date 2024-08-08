import { useState } from "react";
import { deleteComment } from "./api";

export default function DeleteComment({
	comment_id,
	setDeletedCommentResponse,
}) {
	const [deletedComment, setDeletedComment] = useState("");
	function handleDelete(e) {
		deleteComment(e.target.value)
			.then(() => {
				setDeletedComment("deleted");
			})
			.catch(() => {
				setDeletedComment("unsuccessful");
			});
	}

	if (deletedComment === "deleted") {
		setDeletedCommentResponse(true);
	} else if (deletedComment === "unsuccessful") {
		return <p>Unsuccessful!</p>;
	}
	return (
		<button onClick={handleDelete} value={comment_id}>
			Delete comment
		</button>
	);
}
