import { useEffect, useState } from "react";
import { fetchArticles } from "./api";
import ArticleCard from "./ArticleCard";

export default function TopicCoding() {
	const [topicsCoding, setTopicsCoding] = useState([]);

	useEffect(() => {
		fetchArticles("coding").then(({ articles }) => {
			setTopicsCoding(articles);
		});
	}, []);

	return topicsCoding.map((article) => {
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
