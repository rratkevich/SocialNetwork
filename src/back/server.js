const express = require('express');
const mongoose = require('mongoose');
const UserRouter = require('./User/UserRouter');
const app = express();
const cors = require('cors')

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));

app.use(express.json());
app.use('/', UserRouter());
mongoose
    .connect('mongodb://localhost/app', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB is connected...'))
    .catch(error => console.log(error.message()));

app.listen(3000, () => console.log('Server running on port 3000...'));
