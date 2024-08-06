import { useParams } from "react-router-dom";
import { fetchArticleById } from "./api";
import { useEffect, useState } from "react";

export default function Article() {
	const { article_id } = useParams();
	const [singleArticle, setSingleArticle] = useState([]);

	useEffect(() => {
		fetchArticleById(article_id).then((article) => {
			setSingleArticle(article);
		});
	}, []);

	return (
		<>
			<div id="singleArticleDiv">
				<h2 id="singleArticleh2">{singleArticle.title}</h2>
				<h3>Author: {singleArticle.author}</h3>
				<p>Topic: {singleArticle.topic}</p>
				<img src={singleArticle.article_img_url}></img>
				<p>{singleArticle.body}</p>
				<p>Votes: {singleArticle.votes}</p>
			</div>
		</>
	);
}
