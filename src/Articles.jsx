import { useEffect, useState } from "react";
import { fetchAllArticles } from "./api";
import ArticleCard from "./ArticleCard";

export default function Articles() {
	const [articles, setArticles] = useState([]);
	useEffect(() => {
		fetchAllArticles().then(({ articles }) => {
			setArticles(articles);
		});
	}, []);

	return (
		<div className="articles-div">
			{articles.map((article) => {
				return (
					<ArticleCard
						key={article.article_id}
						author={article.author}
						title={article.title}
						topic={article.topic}
						img_url={article.article_img_url}
						article_id={article.article_id}
					/>
				);
			})}
		</div>
	);
}
