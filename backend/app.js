const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const app = express();
require("dotenv/config")

// essential functions
app.use(cors({
    origin: '*'
}))
app.use(express.json({ limit: '50mb' }));
mongoose.connect(process.env.DB_CONNECTION_STRING)
    .then(() => {
        console.log("connected to db")
}).catch((err) => console.log(err));

app.use('/api/users', require('./routes/userRoutes'))


app.listen(process.env.PORT || 5000, () => {
        console.log("server running at port 5000")
})