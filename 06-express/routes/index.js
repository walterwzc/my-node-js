import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.render('index.ejs', {
    name: '<b>zhichao</b>',
    isLogin: true
  })
  // res.render('index.art', {
  //   name: 'zhichao'
  // })
})

router.get('/search', (req, res) => {
  res.render('search.ejs')
})

module.exports = router
