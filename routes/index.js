'use strict'


const {Router} = require('express')
const router = Router()
const News = require('../models/new.js')
const User = require('../models/user.js')

//////////////*********ROUTES************\\\\\\\\\\\\\\\\
/////////*******this retrieves the home page*********\\\\\\\\\\
router.get('/', (req, res) => {
	News
		.find()
		.then((news) => {
				res.render('index', {news})
			})
		})


/////////**********this retrieves the new page*******\\\\\\\
router.get('/new', (req, res)=> {
	res.render('new')
	// res.send("this is the new page")
})


////////********this posts to db**********\\\\\\\\
router.post('/new', (req, res, err) =>{
	News
		.create(req.body)
		.then(()=>{
			res.redirect('/')
		})
		.catch(err)
})

router.get('/login', (req, res, err) => {
	res.render('login')
})

router.post('/login', ({session, body: {email, password}}, res, err) => {
	User
		.findOne({email})
		.then((user) => {
			if (password === user.password) {
				session.sessionUser = email
				res.redirect('/')
			} else{
				res.render('login')
			}
		})
		.catch(err)
})

router.get('/register', (req, res, err) => {
	res.render('register')
})

router.post('/register', ({body: {email, password}}, res, err) => {
	User
		.create({email, password})
		.then(() => {
			res.redirect('/login')
		})
		.catch(err)
})




module.exports = router
