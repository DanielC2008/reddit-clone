'use strict'

const express = require('express')
const app = express()





app.get('/', (req, res) => res.send("hello jerk"))


app.listen('3008', ()=> {
	console.log("listening on port 3008")
})
