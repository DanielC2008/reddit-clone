'use strict'

const express = require('express')
const app = express()
const router = require('./routes/index.js')
const bodyParser = require('body-parser')


app.set('view engine', 'pug')



///////******MIDDLEWARES********\\\\\\\\
app.use(express.static('public'))

app.use(bodyParser.urlencoded({
	extended: false
}));


//////********ROUTES********\\\\\\\
app.use(router)


//////********ERRORS********\\\\\\\
//404
app.use((req, res) => {
	console.log('404');
	//add 404 render
})

// All other errors
app.use((err, req, res, next) => {
	res.sendStatus(err.status || 500)
	// error message replicating http server
	console.error(`[${new Date()}] "${req.method} ${req.url}" Error(${res.statusCode}) ${res.statusMessage}`);
	res.render('error', {error: err})
})















app.listen('3008', ()=> {
	console.log("listening on port 3008")
})
