'use strict'

const express = require('express')
const app = express()
const router = require('./routes/index.js')






///////******MIDDLEWARES********\\\\\\\\



//////********ROUTES********\\\\\\\
app.use(router)














app.listen('3008', ()=> {
	console.log("listening on port 3008")
})
