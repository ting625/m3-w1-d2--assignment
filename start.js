require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');

require('./models/Registration');

mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedToplogy: true

});

mongoose.connection
    .on('open', () => {
        console.log('Mongoose connection open');
    })

    .on('error', (err) => {
        console.log(`Connection error: ${err.message}`);
        
    })

const server = app.listen(3000, function() {
    console.log(`Express is runnung on port ${server.address().port}`);
});