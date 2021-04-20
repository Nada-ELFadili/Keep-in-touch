const mongoose = require('mongoose');

//Db mongoDB
mongoose.connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('db connected'))
    .catch(() => console.log('not nonnect to the database !'))
 