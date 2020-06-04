const axios = require('axios');
const fs = require('fs');

if ( fs.existsSync('dist/index.js') ) {
	fs.readFile('dist/index.js', { encoding: 'utf8' }, (err, data) => {
		console.log(data);
		axios({
			url: 'https://us-central1-kakaobot-63224.cloudfunctions.net/hook/build-complete',
			method: 'put',
			data: {
				code: data,
			},
		});
	});
}

