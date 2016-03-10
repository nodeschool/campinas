'use strict'

var koa = require('koa')
var logger = require('koa-logger')
var serve = require('koa-static')
var stylus = require('koa-stylus')

var app = koa()

app.use(logger())
app.use(stylus('./src'))
app.use(serve('./src'))

app.listen(process.env.PORT || 3000)
