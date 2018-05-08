// function* generator() {
//   yield 'hello'
//   yield 'world'
//   return 'end'
// }
//
// const g = generator()

// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());

// for (s of g) {
//   console.log(s);
// }


// function* add(x) {
//   let y = 2 * (yield x+1)
//   let z = yield (y/3)
//   return x + y + z
// }
//
// const a = add(5)

// console.log(a.next());
// console.log(a.next());
// console.log(a.next());

// console.log(a.next());
// console.log(a.next(6));
// console.log(a.next(12));

/*function* fabonacci() {
  let [pre, cur] = [0, 1]
  for (;;) {
    [pre, cur] = [ cur, pre + cur ]
    yield cur
  }
}

for (n of fabonacci()) {
  if (n > 1000) {
    break
  } else {
    console.log(n);
  }
}*/

// const p = (time) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(5)
//     }, time)
//   })
// }

// p(3000)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log('----err----');
//     console.log(err);
//   })

// const a = async () => {
//   let x = 3 * await p(3000)
//   console.log(0);
//   console.log(x);
// }
//
// a()


// const foo = () => {
//   setTimeout(() => {
//     console.log(0);
//   }, 1000)
//   console.log(1);
// }
// foo()

// console.log('start');
// setTimeout(() => {
//   console.log('setTimeout');
// }, 0)
// setImmediate(() => {
//   console.log('setImmediate');
// })
// process.nextTick(() => {
//   console.log('nextTick');
// })
// console.log('end');


// 加入2个nextTick()的回调函数

/*process.nextTick(function(){
    console.log("nextTick延迟执行A");
});
process.nextTick(function(){
    console.log("nextTick延迟执行B");
    setImmediate(function(){
        console.log("setImmediate延迟执行C");
    });
    process.nextTick(function(){
        console.log("nextTick延迟执行D");
    });
});*/

//加入两个setImmediate()回调函数


/*setImmediate(function(){
    console.log("setImmediate延迟执行E");
    process.nextTick(function(){
        console.log("强势插入F");
    });
    setImmediate(function(){
        console.log("setImmediate延迟执行G");
    });
});
setImmediate(function(){
    console.log("setImmediate延迟执行H");
    process.nextTick(function(){
        console.log("强势插入I");
    });
    process.nextTick(function(){
        console.log("强势插入J");
    });
    setImmediate(function(){
        console.log("setImmediate延迟执行K");
    });
});
console.log("正常执行L");*/

var async = require('async')
console.time('test')
// 串行无关联
// async.series([
//   function (callback) {
//     setTimeout(function(){
//       callback(null, 'one')
//     }, 2000)
//   },
//   function (callback) {
//     setTimeout(function(){
//       callback(null, 'two')
//     }, 5000)
//   }
// ], function(err, results){
//   console.log(results)
//   console.timeEnd('test')
// })

/*async.series({
  one: function (callback) {
    setTimeout(function(){
      callback(null, '1')
    }, 1000)
  },
  two: function (callback) {
    setTimeout(function(){
      callback(null, '2')
    }, 2000)
  }
}, function(err, results){
  console.log(results)
  console.timeEnd('test')
})*/

// async.parallel([
//   function (callback) {
//     setTimeout(function(){
//       callback(null, 'one')
//     }, 2000)
//   },
//   function (callback) {
//     setTimeout(function(){
//       callback(null, 'two')
//     }, 5000)
//   }
// ], function(err, results){
//   console.log(results)
//   console.timeEnd('test')
// })


// 串行有关联

async.waterfall([
  function (callback) {
    callback(null, 'one', 'two')
  },
  function (arr1, arr2, callback) {
    callback(null, arr1, arr2, 'three')
  },
  function (arr1, arr2, arr3, callback) {
    callback(null, [arr1, arr2, arr3, 'done'])
  }
], function(err, results){
  console.log(results)
})
