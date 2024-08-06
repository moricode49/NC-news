import { useEffect, useState } from "react";
import { fetchCommentsByArticleId } from "./api";
import { useParams } from "react-router-dom";
import CommentCard from "./CommentCard";
import "./Comments.css";

export default function Comments() {
	const { article_id } = useParams();
	const [comments, setComments] = useState([]);
	useEffect(() => {
		fetchCommentsByArticleId(article_id).then((comments) => {
			setComments(comments);
		});
	}, []);

	return (
		<>
			<h3>Comments</h3>
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
