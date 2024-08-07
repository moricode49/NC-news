import axios from "axios";

const newsAPI = axios.create({
	baseURL: "https://nc-news-lrsx.onrender.com/api/",
});

export const fetchAllUsers = () => {
	return newsAPI.get("/users").then((response) => {
		return response.data;
	});
};

export const fetchArticles = (sortBy, order, topic) => {
	return newsAPI
		.get("/articles", {
			params: { sortBy: sortBy, order: order, topic: topic },
		})
		.then((response) => {
			console.log(response.data);
			return response.data;
		});
};

export const fetchArticleById = (id) => {
	return newsAPI.get(`/articles/${id}`).then((response) => {
		return response.data;
	});
};

export const fetchTopics = () => {
	return newsAPI.get(`/topics`).then((response) => {
		return response.data;
	});
};

export const fetchCommentsByArticleId = (articleId) => {
	return newsAPI.get(`/articles/${articleId}/comments`).then((response) => {
		return response.data;
	});
};

export const giveVotes = (articleId, upDownVote) => {
	if (upDownVote === "upvote") {
		upDownVote = 1;
	} else {
		upDownVote = -1;
	}
	return newsAPI.patch(`/articles/${articleId}`, {
		inc_votes: `${upDownVote}`,
	});
};

export const postComment = (articleId, username, comment) => {
	return newsAPI.post(`/articles/${articleId}/comments`, {
		username: username,
		body: comment,
	});
};

export const deleteComment = (commentId) => {
	return newsAPI.delete(`/comments/${commentId}`);
};
