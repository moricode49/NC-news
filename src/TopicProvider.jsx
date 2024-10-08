import { useEffect, useState } from "react";
import { fetchArticles, fetchTopics } from "./api";
import TopicCard from "./TopicCard";
import { Link, useParams, useSearchParams } from "react-router-dom";

export default function TopicProvider() {
	const topicParam = useParams();
	const [topicArray, setTopicArray] = useState([]);
	const [topicsNav, setTopicsNav] = useState([]);
	const [searchParams, setSearchParams] = useSearchParams();
	const sortByQuery = searchParams.get("sort_by");
	const orderQuery = searchParams.get("order");

	useEffect(() => {
		fetchArticles(sortByQuery, orderQuery, topicParam.topic).then(
			({ articles }) => {
				setTopicArray(articles);
			}
		);

		fetchTopics().then(({ topics }) => {
			setTopicsNav(topics);
		});
	}, [sortByQuery, orderQuery, topicParam]);

	const setSortBy = (sort) => {
		const newParams = new URLSearchParams(searchParams);
		newParams.set("sort_by", sort);
		setSearchParams(newParams);
	};

	const setSortOrder = (direction) => {
		const newParams = new URLSearchParams(searchParams);
		newParams.set("order", direction);
		setSearchParams(newParams);
	};

	if (topicArray === "Topic not found") {
		return <p>Topic not found!</p>;
	}

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
					onChange={(e) => setSortOrder(e.target.value)}
				>
					<option value="desc">desc</option>
					<option value="asc">asc</option>
				</select>
			</div>
			{topicArray.map((article) => {
				return (
					<TopicCard
						key={article.article_id}
						author={article.author}
						title={article.title}
						topic={article.topic}
						img_url={article.article_img_url}
						article_id={article.article_id}
					/>
				);
			})}
		</>
	);
}
