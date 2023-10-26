const mongoose = require("mongoose")
// const url = "mongodb+srv://<username>:<password>@cluster0.69lknpi.mongodb.net/?retryWrites=true&w=majority";
const url = "mongodb://localhost:27017/WEBCLUE"

const connectToMongo = () => {
    mongoose.connect(url, {
        useNewUrlParser: true,
        // useCreateIndex:true,
        useUnifiedTopology: true
        // useFindAndModify:false 
    }).then(() => { console.log("Connection Established") })
        .catch((err) => { console.log(err) })
}


module.exports = connectToMongo;