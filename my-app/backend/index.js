const express = require("express")
const connectToMongo = require("./db.js")
connectToMongo();
const bodyParser = require('body-parser');
const formRoute = require("./Router/formRoute.js")
const cors = require("cors")
const bcrypt = require('bcrypt'); 

const app = express();
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors())
app.use(express.json());

app.use("/addandfetch", formRoute);


app.listen(port, () => {
    console.log(`server Running on port ${port}`)
})