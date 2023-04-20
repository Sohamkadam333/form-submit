// sohamkadam58
// gnR5ciJ1ugGnPOG6

const express = require('express');
const app = express();
const { v4: uuidv4 } = require('uuid');
// mongo = require('mongodb');
// const MongoClient = require('mongodb').MongoClient;
// const url = 'mongodb+srv://sohamkadam58:gnR5ciJ1ugGnPOG6@cluster0.smo78g3.mongodb.net/test';
const cors = require('cors');

// const { users } = require('./data/users');
const users = [
	{
		name: 'john',
		age: 21,
	},
];

app.use(
	express.urlencoded({
		extended: true,
	})
);

app.use(express.json());

app.use(cors());
app.get('/', (req, res) => {
	res.send('<h1>Home Page</h1>');
});

app.post('/post-users', (req, res) => {
	console.log('post req hit');
	const { name, email } = req.body;
	// console.log(name, email);
	const newUser = {
		id: uuidv4(),
		name,
		email,
	};
	users.push(newUser);
	// res.send('User Added Successfully');
});

app.get('/users', (req, res) => {
	// console.log(users);
	res.setHeader('Content-Type', 'application/json');
	res.send(users);
});

app.listen(3000, (req, res) => {
	console.log('Server started');
});
