const app = require('./app');

const server = app.listen(3000, function() {
    console.log(`Express is runnung on port ${server.address().port}`);
});