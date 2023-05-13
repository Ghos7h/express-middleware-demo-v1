const express = require('express');

const app = express();

const router = express.Router()

router.use((err, req, res, next) => {
    if (err) {
        console.log('first err: ', err)
    }
    console.log('first req: ')
    console.log('Time: ', new Date())
    next()
});


router.get('/user/:id', (err, req, res, next) => {
    if (err)
        console.log('second err: ', err)
    console.log('Request Url = ', req.url);
    next();
}, (err, req, res, next) => {
    if(err)
        console.log('third err', err);
    console.log('Request Type = ', req.method);
    console.log('Request user id = ', req.params.id);
    next()
}, (req, res) => {
    res.json({
        status: 200,
        id: req.params.id
    })
});

app.use('/', router);

app.listen(5001, (req, res) => {
    console.log('Listening to port 5001');
})