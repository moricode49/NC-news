import { useParams } from "react-router-dom";
import { fetchArticleById } from "./api";
import { useEffect, useState } from "react";
import Comments from "./Comments";
import Votes from "./Votes";

export default function Article() {
	const { article_id } = useParams();
	const [singleArticle, setSingleArticle] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		fetchArticleById(article_id)
			.then((article) => {
				setSingleArticle(article);
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
			<div id="singleArticleDiv">
				<h2 id="singleArticleh2">{singleArticle.title}</h2>
				<h3>Author: {singleArticle.author}</h3>
				<p>Topic: {singleArticle.topic}</p>
				<img src={singleArticle.article_img_url}></img>
				<p>{singleArticle.body}</p>
				<Votes
					votes={singleArticle.votes}
					articleId={singleArticle.article_id}
				/>
			</div>
			<Comments />
		</>
	);
}
