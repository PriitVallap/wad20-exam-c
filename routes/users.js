const express = require('express');
const router = express.Router();
const fs = require('fs');

/* /GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});  

router.get('/', function (req, res, next) {

    fs.readFile('./data/users.json', (err, data) => {
        if (err) throw err;
        let users = JSON.parse(data);
        res.json(users);
    });
});

module.exports = router;
