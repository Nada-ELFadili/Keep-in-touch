require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');
const app = express();

const clientRoute = require('./routes/client');

//db
require('./config/db');


app.get('/' , (req ,res) => 
{
    res.send('its working !');
});

app.use(express.json());
 app.use ('/' , clientRoute);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

