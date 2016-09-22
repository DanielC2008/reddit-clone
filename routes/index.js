'use strict'


const {Router} = require('express')
const router = Router()
const News = require('../models/new.js')

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


module.exports = router
