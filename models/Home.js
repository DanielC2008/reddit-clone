'use strict'

const mongoose = require('mongoose')

module.exports = mongoose.model('Home', {
	name: String,
	email: String,
	image: String
})
