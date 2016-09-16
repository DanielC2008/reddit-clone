'use strict'

const mongoose = require('mongoose')

module.exports = mongoose.model('new', {
	title: String,
	img: String,
	link: String
})
