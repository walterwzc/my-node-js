const express = require('express')
const multer = require('multer')

const app = express()

// const upload = multer({
//   dest: './uploads'
// })

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    const arr = file.originalname.split('.')
    const extention = arr[arr.length-1]
    cb(null, file.fieldname + '-' + Date.now() + '.' + extention)
  }
})

var fileFilter = function (req, file, cb) {
  const arr = file.originalname.split('.')
  const extention = arr[arr.length-1].toLowerCase()
  if (!extention.match(/^(jpg|jpeg|png|gif)$/i)) {
    cb(new Error('image only!'))
  } else {
    cb(null, true)
  }
}

var upload = multer({ storage, fileFilter })

app.post('/profile', upload.single('avatar'), (req, res, next) => {
  console.log(req.file);
  res.send('ok')
})

app.post('/photos', upload.array('avatar', 3), (req, res, next) => {
  console.log(req.files);
  res.send('ok-multi')
})

app.use((err, req, res, next) => {
  res.status(500).send(err.message)
})

app.listen(7073, 'localhost', () => {
  console.log('localhost: 7073');
})
