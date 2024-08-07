import { useEffect, useState } from "react";
import { fetchCommentsByArticleId } from "./api";
import { Link, useParams } from "react-router-dom";
import CommentCard from "./CommentCard";
import "./Comments.css";
import NewComment from "./NewComment";

export default function Comments() {
	const { article_id } = useParams();
	const [comments, setComments] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [newComment, setNewComment] = useState(false);

	useEffect(() => {
		fetchCommentsByArticleId(article_id)
			.then((comments) => {
				setComments(comments);
				setIsLoading(false);
			})
			.catch((error) => {
				setIsLoading(false);
			});
	}, []);

	function handleClick() {
		setNewComment(true);
	}
	if (newComment) {
		return <NewComment />;
		// <Link to={`./new-comment`}></Link>;
	}

	if (isLoading) {
		return <img src="../loading.svg" alt="loading animation" />;
	}

	return (
		<>
			<h3>Comments</h3>
			<button id="new-comment" onClick={handleClick}>
				Post a New Comment
			</button>
			{comments.map((comment) => {
				return (
					<CommentCard
						key={comment.comment_id}
						author={comment.author}
						body={comment.body}
						votes={comment.votes}
						created_at={comment.created_at}
					/>
				);
			})}
		</>
	);
}
