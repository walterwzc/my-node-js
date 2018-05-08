/*
  1\一个JS文件就是一个模块
  2\通过module.exports 或者 exports 来导出模块接口
  3\应用require 引入一个模块
  4\调用模块的功能
*/

const greeting = require('./src/greeting.min')
// const hi = require('./src/hi')
console.log(greeting.f(3, 4))
console.log(greeting)

/*let x = {
  name: 'aaa'
}

let y = x

x.name = 'bbb'
console.log(x)
console.log(y)

y = {
  name: 'yyy'
}

console.log(x)
console.log(y);*/

// module.exports = f
