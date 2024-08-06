import axios from "axios";

const newsAPI = axios.create({
	baseURL: "https://nc-news-lrsx.onrender.com/api/",
});

export const fetchAllArticles = () => {
	return newsAPI.get("/articles").then((response) => {
		return response.data;
	});
};

export const fetchArticleById = (id) => {
	return newsAPI.get(`/articles/${id}`).then((response) => {
		return response.data;
	});
};

export const fetchCommentsByArticleId = (articleId) => {
	return newsAPI.get(`/articles/${articleId}/comments`).then((response) => {
		return response.data;
	});
};
