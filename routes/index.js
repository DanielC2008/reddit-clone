'use strict'


const {Router} = require('express')
const router = Router()
const NewSubmit = require('../models/new.js')

//////////////*********ROUTES************\\\\\\\\\\\\\\\\
/////////*******this retrieves the home page*********\\\\\\\\\\
router.get('/', (req, res) => {
	res.render('index')
})


/////////**********this retrieves the new page*******\\\\\\\
router.get('/new', (req, res)=> {
	res.render('new')
	// res.send("this is the new page")
})


////////********this posts to db**********\\\\\\\\
router.post('/new', (req, res, err) =>{
	NewSubmit
		.create(req.body)
		.then(()=>{
			res.redirect('/')
		})
		.catch(err)
})


module.exports = router
