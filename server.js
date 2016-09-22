'use strict'

const express = require('express')
const app = express()
const router = require('./routes/index.js')
//body obj put on req
const bodyParser = require('body-parser')
const { connect } = require('./db/database.js')
//session obj put on req
const session = require('express-session')
const RedisStore = require('connect-redis')(session)


app.set('view engine', 'pug')


///////******MIDDLEWARES********\\\\\\\\
app.use(express.static('public'))

app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(session({
  store: new RedisStore({
  	url: process.env.REDIS_URL || "redis://localhost:6379"
  }),
  secret: 'automaticbarnacle'
}))

app.use((req, res, next) =>{
	app.locals.user = req.session && req.session.sessionUser
	next()
})

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
	// res.render('error', {error: err})
	console.log(err.stack)
})


connect()
	.then(() => {
		app.listen('3008', ()=> {
			console.log("listening on port 3008")
		})
})
.catch(console.error)

