// const {URL, URLSearchParams} = require('url')

// const url = new URL('https://www.baidu.com:80/api/index.php?id=2&name=a#tag=111')

// 基本属性和方法

/*console.log(url.hostname)
console.log(url.host)
console.log(url.hash)
console.log(url.href)
console.log(url.origin)
console.log(url.pathname)
console.log(url.port)
console.log(url.protocol)
console.log(url.search)
console.log(url.searchParams)
console.log(url.toString())
console.log(url.toJSON())
console.log(url.searchParams.get('id'))*/

// URLSearchParams

/*const urlSearchParams = new URLSearchParams(url.searchParams)
urlSearchParams.append('city', 'beijing')
console.log(urlSearchParams)
urlSearchParams.set('city', 'shanghai')
console.log(urlSearchParams)
urlSearchParams.delete('city')
console.log(urlSearchParams)*/

// url 重要方法
const url = require('url')
const parseObj = url.parse('https://www.baidu.com:80/api/index.php?id=2&name=a#tag=111', true, true)
// console.log(parseObj)

const urlStr = url.format({
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'www.baidu.com:80',
  port: '80',
  hostname: 'www.baidu.com',
  hash: '#tag=111',
  search: '?id=2&name=a',
  query: { id: '2', name: 'a' },
  pathname: '/api/index.php',
  path: '/api/index.php?id=2&name=a',
  href: 'https://www.baidu.com:80/api/index.php?id=2&name=a#tag=111' })

// console.log(urlStr)

console.log(url.resolve('http://www.abc.com/', '/b'))
console.log(url.resolve('http://www.abc.com/a/', 'b'))
console.log(url.resolve('/api/v2/', '../list'))
