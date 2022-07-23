const express = require('express');
const config = require('../config.js');
const router = require('./network')

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended : true}));

// Router
app.use('/', router);

app.listen(config.mysqlService.port, () => {
    console.log('MySQL service listening on port ', config.mysqlService.port);
});
