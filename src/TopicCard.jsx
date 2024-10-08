import { Link } from "react-router-dom";

export default function TopicCard({
	author,
	title,
	topic,
	img_url,
	article_id,
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
			</article>
		</Link>
	);
}
