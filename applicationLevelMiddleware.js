const express = require('express');

const app = express();

// custom Middleware
const LoggerMiddleware = (req, res, next) => {
    console.log(`Logged ${req.url} ${req.method} -- ${new Date()}`);
    next();
};

app.use(LoggerMiddleware);


app.get('/users', (req, res) => {
    console.log('req in users ', req)
    res.json({
        status: 200
    })
})


app.get('/save', (req, res) => {
    console.log('req in save ', req)
    res.json({
        status: 200
    })
});


app.listen(5000, (req, res)=>{
    console.log('req = ', req);
    console.log('res = ', res);
    console.log('Server is listening on port 5001');
})


