var express = require('express');
var router = express.Router();
const { getLogin } = require('./data.services')

router.post('/', async function (req, res) {
    
    // const param =req.body;
    // const result = await getLogin(param.firstName,param.lastName);
    res.send('1')
});

router.post('/IsLogin', async function (req, res) {
    res.send('1')
});


module.exports = router;