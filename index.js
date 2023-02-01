
const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
require('dotenv').config()
const port = 3000;

const app = express();
const https = require('https')

app.use("/",router);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(process.env.PORT || 3000, () => {
	console.log(`App start on port ${process.env.PORT || 3000}`);
});

router.post('/sign', async function (req, res) {
	console.log('debug here =======>')
	res.set({ 'Content-Type': 'text/json', 'access-control-allow-origin': '*' })
	res.send("yes");
	// const postData = req.body;
	// const options = {
	// 	hostname: 'botsnightmare.com',
	// 	path: '/sign',
	// 	method: 'POST',
	// 	headers: {
	// 		'Content-Length': postData.length,
	// 		'Content-Type': 'application/json'
	// 	},

	// };

	// callback = function (response) {
	// 	var str = '';
	// 	response.on('data', function (chunk) {
	// 		str += chunk;
	// 	});

	// 	response.on('end', function () {
	// 		res.set({ 'Content-Type': 'text/json', 'access-control-allow-origin': '*' })
	// 		res.send(JSON.parse(str))
	// 	});
	// }

	// const reqtoServer = https.request(options, callback);
	// reqtoServer.write(postData);
	// reqtoServer.end();

})

router.get('/sign', async function (req, res) {
	const postData = '{"wallet": "' + req.query.wallet + '"}';
	const options = {
		hostname: 'botsnightmare.com',
		path: '/sign',
		method: 'POST',
		headers: {
			'Content-Length': postData.length,
			'Content-Type': 'application/json'
		},

	};
	callback = function (response) {
		var str = '';
		response.on('data', function (chunk) {
			str += chunk;
		});

		response.on('end', function () {
			res.set({ 'Content-Type': 'text/json', 'access-control-allow-origin': '*' })
			res.send(JSON.parse(str))
		});
	}

	const reqtoServer = https.request(options, callback);
	reqtoServer.write(postData);
	reqtoServer.end();
})

router.get('/', function(req, res) {
	res.set({ 'Content-Type': 'text/json', 'access-control-allow-origin': '*' })
	res.send('router');
})
