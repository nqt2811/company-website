const express = require('express')
const morgan = require('morgan')
const path = require('path')
const handlebars = require('express-handlebars')
const app = express()

// Static folder
app.use(express.static(path.join(__dirname, 'public')))

// Engine express-handlebars setup
app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname,'resources/views'))

// HTTP logger
app.use(morgan('combined'))

app.get('/', function (req, res) {
  res.render('home')
})

app.listen(3000)
