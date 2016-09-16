'use strict'


const {Router} = require('express')
const router = Router()


//////////////*********ROUTES************\\\\\\\\\\\\\\\\
/////////*******this retrieves the home page*********\\\\\\\\\\
router.get('/', (req, res) => {
	// console.log(req);
	res.render('index')
})


/////////**********this retrieves the new page*******\\\\\\\
router.get('/new', (req, res)=> {
	res.render('new')
	// res.send("this is the new page")
})


////////********this posts to db**********\\\\\\\\
router.post('/new', (req, res, err) =>{
	res.send()
})


module.exports = router
