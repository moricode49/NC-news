import { useEffect, useState } from "react";
import { fetchArticles } from "./api";
import ArticleCard from "./ArticleCard";

export default function TopicFootball() {
	const [topicsFootball, setTopicsFootball] = useState([]);

	useEffect(() => {
		fetchArticles("football").then(({ articles }) => {
			setTopicsFootball(articles);
		});
	}, []);

	return topicsFootball.map((article) => {
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
	});
}
