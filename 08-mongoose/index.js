const Test = require('./models/Position')

new Test({ title: 'test test' })
  .save()
  .then(() => console.log('succ'))
