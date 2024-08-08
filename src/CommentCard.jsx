import { useContext, useState } from "react";
import "./CommentCard.css";
import { UserContext } from "./UserContext";
import DeleteComment from "./DeleteComment";

export default function CommentCard({
	author,
	body,
	votes,
	created_at,
	comment_id,
}) {
	const { loggedInUser } = useContext(UserContext);
	const [deletedCommentResponse, setDeletedCommentResponse] = useState(false);

	if (deletedCommentResponse) {
		return <p>Comment Deleted!</p>;
	}

	if (loggedInUser.username === author) {
		return (
			<section>
				<p>{body}</p>
				<p>User: {author}</p>
				<p>Votes: {votes}</p>
				<p>Posted: {created_at}</p>
				<DeleteComment
					comment_id={comment_id}
					setDeletedCommentResponse={setDeletedCommentResponse}
				/>
			</section>
		);
	} else {
		return (
			<section>
				<p>{body}</p>
				<p>User: {author}</p>
				<p>Votes: {votes}</p>
				<p>Posted: {created_at}</p>
			</section>
		);
	}
}
