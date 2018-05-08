import express from 'express'
import logs from 'morgan'
import path from 'path'
import bodyParser from 'body-parser'

import index from './routes/index'
import comments from './routes/commonts'

const app = express()

app.use(logs('dev'))

app.set('views', path.resolve(__dirname, 'views'))
// app.set('view engine', 'ejs')
app.engine('art', require('express-art-template'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static(path.resolve(__dirname, 'public')))

app.use('/', index)
app.use('/comments', comments)

app.use((req, res, next) => {
  let err = new Error('Not Found')
  err.status = 404
  next(err)
})

app.use((err, req, res, next) => {
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}
  res.status(err.status || 500)
  res.render('error.ejs')
})

app.listen(3000, 'localhost', () => {
  console.log('server is running at localhost:3000');
})
