// list elements
// with author, body, votes, created_at

import "./CommentCard.css";

export default function CommentCard({ author, body, votes, created_at }) {
	return (
		<section>
			<p>{body}</p>
			<p>User: {author}</p>
			<p>Votes: {votes}</p>
			<p>Posted: {created_at}</p>
		</section>
	);
}
