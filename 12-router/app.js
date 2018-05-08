function Router() {
    this.routes = {} //保存路由和路由的处理函数
    this.currentUrl = '' //拿到当前的url
}

// 注册路由
Router.prototype.route = function (url, callback) {
    this.routes[url] = callback || function () {} //noop
}

Router.prototype.refresh = function (e) {
    this.currentUrl = e.newURL.split('#')[1]
    this.routes[this.currentUrl]()
}

// {
//   '/': cb1,
//   '/position': cb2
// }

// 初始化方法
Router.prototype.init = function () {
    // 监听hashchange事件，当hash的值发生变化的时候去调用对应的刷新页面的方法
    window.addEventListener('hashchange', this.refresh.bind(this), false);
}

var router = new Router();

router.init();

router.route('/', function () {
    console.log(0);
})

router.route('/position', function () {
    console.log(1);
})


// http://localhost:8080/#/position
// 注意最后访问的URL， 必须是以 #/ 来作为分割，