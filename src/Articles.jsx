import { useEffect, useState } from "react";
import { fetchArticles, fetchTopics } from "./api";
import ArticleCard from "./ArticleCard";
import { Link } from "react-router-dom";

export default function Articles() {
	const [articles, setArticles] = useState([]);
	const [topics, setTopics] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetchArticles()
			.then(({ articles }) => {
				setArticles(articles);
				setIsLoading(false);
			})
			.catch(() => {
				setIsLoading(false);
			});
		fetchTopics().then(({ topics }) => {
			setTopics(topics);
		});
	}, []);

	if (isLoading) {
		return <img src="../loading.svg" alt="loading animation" />;
	}

	return (
		<>
			<nav>
				<h3>Topics: </h3>
				{topics.map((topic) => {
					const path = "./" + topic.slug;
					return (
						<Link to={path} key={topic.slug}>
							{topic.slug.toUpperCase()}
						</Link>
					);
				})}
			</nav>
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
		</>
	);
}
