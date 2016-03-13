import queryString from 'query-string';
import update from 'react-addons-update';

export class RequestError extends Error {}

class API {
	constructor(prefix = '') {
		this.prefix = prefix;
	}

	headers() {
		const loginToken = localStorage.getItem('loginToken');
		return Object.assign({
			Accept: 'application/vnd.api+json'
		}, loginToken ? { Authorization: `Bearer ${loginToken}` } : {});
	}

	get(path, options = {}) {
		const { params, ...rest } = options;
		if (params) {
			path += queryString.stringify(params);
		}
		return this.request('GET', path, rest);
	}

	post(path, data) {
		return this.request('POST', path, { body: { data }})
	}

	patch(path, data) {
		return this.request('PATCH', path, { body: { data }})
	}

	delete(path) {
		return this.request('DELETE', path);
	}

	request(method, path, options = {}) {
		const defaultHeaders = this.headers();
		const requestOptions = update(options, {
			method: { $set: method },
			headers: {
				$apply: headers => ({
					...defaultHeaders, ...(headers || {})
				})
			},
			body: {
				$apply: body => (
					typeof body === 'object' ? JSON.stringify(body) : body
				)
			}
		});

		return fetch(this.prefix + path, requestOptions)
			.then(response => {
				if (!response.ok) {
					return response.json().then(json => {
						json.errors.forEach(error => {
							const { title, detail } = error
							throw new RequestError(title, detail);
						});
					});
				}
				if (response.status !== 204) {
					return response.json().then(json => json.data);
				}
			});
	}
}

export default API;
