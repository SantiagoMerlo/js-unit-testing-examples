const express = require('express');

const homepage = require('./middleware/homepage');
const login = require('./middleware/login');
const authenticate  = require('./middleware/authenticate');
const dashboard = require('./middleware/dashboard');
const promiseTest = require('./middleware/promiseTest');
const apiRoutes = require('./routes/api');

function setupRoutes(app) {
    app.get('/', homepage);
    app.get('/login', login);
    app.get('/dashboard',
        authenticate,
        dashboard
    );
    app.get('/promises', promiseTest);

    app.use('/api', apiRoutes);
}

function start(port = 7080) {
    const app = express();

    setupRoutes(app);

    const server = app.listen(port, () => {
        console.log(`Server running on: ${port}`);
    });

    return server;
}

module.exports = {
    start
};
