const EventEmmiter = require('events')

class MyEmmiter extends EventEmmiter {}

const player = new MyEmmiter()

player.once('play', (movie) => {
  console.log(`正在热映: ${movie}`)
})

player.emit('play', '和平饭店')
player.emit('play', '糖人街探案')
