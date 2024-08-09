import { useEffect, useState } from "react";
import { fetchArticles, fetchTopics } from "./api";
import ArticleCard from "./ArticleCard";
import { Link, useSearchParams } from "react-router-dom";

export default function Articles() {
	const [articles, setArticles] = useState([]);
	const [topicsNav, setTopicsNav] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [searchParams, setSearchParams] = useSearchParams();
	const sortByQuery = searchParams.get("sort_by");
	const orderQuery = searchParams.get("order");

	useEffect(() => {
		fetchArticles(sortByQuery, orderQuery)
			.then(({ articles }) => {
				setArticles(articles);
				setIsLoading(false);
			})
			.catch(() => {
				setIsLoading(false);
			});
		fetchTopics().then(({ topics }) => {
			setTopicsNav(topics);
		});
	}, [sortByQuery, orderQuery]);

	if (isLoading) {
		return <img src="../loading.svg" alt="loading animation" />;
	}

	const setSortBy = (sort) => {
		const newParams = new URLSearchParams(searchParams);
		newParams.set("sort_by", sort);
		setSearchParams(newParams);
	};

	const SetSortOrder = (direction) => {
		const newParams = new URLSearchParams(searchParams);
		newParams.set("order", direction);
		setSearchParams(newParams);
	};

	return (
		<>
			<nav>
				<h3>Topics: </h3>
				{topicsNav.map((topic) => {
					const path = "/topics/" + topic.slug;
					return (
						<Link to={path} key={topic.slug}>
							{topic.slug.toUpperCase()}
						</Link>
					);
				})}
			</nav>
			<div id="sort-by-div">
				Sort by:{" "}
				<select
					id="sort-by-select"
					onChange={(e) => {
						setSortBy(e.target.value);
					}}
				>
					<option value="created_at">date</option>
					<option value="comment_count">comments</option>
					<option value="votes">votes</option>
				</select>
				Order:{" "}
				<select
					id="order-by-select"
					onChange={(e) => SetSortOrder(e.target.value)}
				>
					<option value="desc">desc</option>
					<option value="asc">asc</option>
				</select>
			</div>
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
							date={article.created_at}
							votes={article.votes}
							comment_count={article.comment_count}
						/>
					);
				})}
			</div>
		</>
	);
}
