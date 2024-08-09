import { Link } from "react-router-dom";

export default function ArticleCard({
	author,
	title,
	topic,
	img_url,
	article_id,
	date,
	votes,
	comment_count,
}) {
	return (
		<Link to={`/articles/${article_id}`}>
			<article>
				<p>{title}</p>
				<p>
					<span id="article-card-span">Author: </span>
					{author}
				</p>
				<p>
					<span id="article-card-span">Topic: </span>
					{topic}
				</p>
				<img className="list-img" src={img_url} alt="" />
				<p>{date}</p>
				<p>Votes: {votes}</p>
				<p>Comments: {comment_count}</p>
			</article>
		</Link>
	);
}
