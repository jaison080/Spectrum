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
app.use('/api/blogs', require('./routes/blogRoutes'))
app.use('/api/qna', require('./routes/qnaRoutes'))
app.use('/api/house',require('./routes/housingRoutes'));
app.use('/api/jobs',require('./routes/jobRoutes'));
app.use('/api/admin',require('./routes/adminRoutes'))



app.listen(process.env.PORT || 5000, () => {
        console.log("server running at port 5000")
})