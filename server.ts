require('dotenv').config();
import UserCtrl from './controllers/UserController';

const express = require('express');
const bodyParser = require('body-parser');


const registerValidations = require('./validations/register');

const app = express();
require('./core/db');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/users', UserCtrl.getUsers);
app.post('/users', registerValidations, UserCtrl.create);
// app.patch('/users', UserCtrl.update);
// app.delete('/users', UserCtrl.delete);

app.listen(process.env.PORT, (): void => {
    console.log("Server running on Port 5000");
});