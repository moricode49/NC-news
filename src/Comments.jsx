import { useEffect, useState } from "react";
import { fetchCommentsByArticleId } from "./api";
import { useParams } from "react-router-dom";
import CommentCard from "./CommentCard";
import "./Comments.css";

export default function Comments() {
	const { article_id } = useParams();
	const [comments, setComments] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

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

	if (isLoading) {
		return <img src="../loading.svg" alt="loading animation" />;
	}

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
