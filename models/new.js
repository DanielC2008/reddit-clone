'use strict'

const mongoose = require('mongoose')

module.exports = mongoose.model('New', {
	title: String,
	link: String,
	image: String
})
