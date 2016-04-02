const API = 'https://api.example.com';

fetch(API + '/comments/1')
	.then(response => response.json())
	.then(json => fetch(API + '/users/' + json.userId))
	.then(response => resonse.json());
