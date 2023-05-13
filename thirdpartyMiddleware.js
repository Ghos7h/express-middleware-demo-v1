const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());


app.post('/save', (req, res)=>{
    res.json({
        status: 200,
        message: 'Hello World'
    })
});


app.listen(5004, (req, res)=> {
    console.log('Listening to port 5004');
})