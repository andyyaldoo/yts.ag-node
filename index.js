const request = require('request-promise');

const API_URL = `https://yts.ag/api/v2/`;

function get(path, qs = {}, method = 'GET') {
	return request.get({url: `${API_URL}${path}`, method, qs, json: true});
};

function post(path, form = {}, method = 'POST') {
	return request.get({url: `${API_URL}${path}`, method, form, json: true});
};
module.exports = {
	list_movies(options = {}) {
		return get("list_movies.json", options);
	},

	movie_details(options) {
		return get("movie_details.json", options).then(res => {
			console.log(res);
		}).catch(err => console.log(err))
	},

	movie_suggestions(movie_id) {
		return get("movie_suggestions.json", {movie_id}).then(res => {
			console.log(res);
		}).catch(err => console.log(err))
	},

	movie_comments(movie_id) {
		return get("movie_comments.json", {movie_id}).then(res => {
			console.log(res);
		}).catch(err => console.log(err))
	},

	movie_reviews(movie_id) {
		return get("movie_reviews.json", {movie_id}).then(res => {
			console.log(res);
		}).catch(err => console.log(err))
	},

	movie_parental_guides(movie_id) {
		return get("movie_parental_guides.json", {movie_id}).then(res => {
			console.log(res);
		}).catch(err => console.log(err))
	},

	list_upcoming() {
		return get("list_upcoming.json").then(res => {
			console.log(res);
		}).catch(err => console.log(err));
	},

	generate_magnet_link() {
		return "magnet:?xt=urn:btih:";
	}
}