//Packages Required

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//The port we're working on
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
	extended: true,
	})
);

app.use('/' , require('./routes')(express));

//Listening for and showing what port is active
exports.server = app.listen(port, () =>{
	
	console.log('The server is active on port:' , port);
});