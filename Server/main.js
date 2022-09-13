const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();
const login = require('./api/login')

app.use("/", router);

app.use(cors());
app.options('*', cors())


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const path = __dirname + '/static/';
app.use(express.static(path));

app.use('/login', login);


app.listen(3000, () => {
    console.log("Started on PORT 3000");
})