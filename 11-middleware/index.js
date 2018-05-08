const express = require('express')

const app = express()

// app.get('/aa', function (req, res, next) {
//   console.log('Time:', Date.now());
//   res.send('aa')
//   next();
// });

// app.use(function (req, res, next) {
//   console.log('another middleware');
//   next();
// });

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    console.log(0);
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


app.listen(9999)