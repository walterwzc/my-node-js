const qs = require('querystring')

console.log(qs.parse('name:zhangsan,age:20', ',', ':'))
console.log(qs.stringify({ name: 'zhangsan', age: '20' }, ',', '/'))
console.log(qs.escape('city=北京&name=z'))
console.log(qs.unescape('city=北京&name=z'))
