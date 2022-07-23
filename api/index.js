const express = require('express');
const swaggerUi = require('swagger-ui-express');
// const bodyParser = require('body-parser');

const config = require('../config.js');
const auth = require('./components/auth/network');
const user = require('./components/user/network');
const errors = require('../network/errors');

const app = express();
// app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended : true}));

const swaggerDoc = require('./swagger.json');

// Router
app.use('/api/auth', auth);
app.use('/api/users', user);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use(errors);

app.listen(config.api.port, () => {
    console.log('Api listening on port ', config.api.port);
});
