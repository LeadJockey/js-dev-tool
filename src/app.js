const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
const router = require('./route');


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(cors());

app.use('/', require('./route'));
// app.use('*', (req, res) => res.status(404).json({ msg:'page not found' }));

app.listen(process.env.PORT, () => console.log(`server started: listening on port : ${process.env.PORT}`));



