import express from 'express'

const router = express.Router()

let comments = []

router.get('/new', (req, res) => {
  res.render('comments/new.ejs')
})

router.post('/new', (req, res) => {
  comments.push({
    comment: req.body.comment,
    create_at: new Date()
  })
  res.render('comments/index.ejs', {comments: comments})
})

module.exports = router
