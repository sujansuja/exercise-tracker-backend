const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose')




require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
    origin: ["http://localhost:5000", "https://exercise-tracker-app-olpp.onrender.com"]
}));
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, 
    { useNewUrlParser: false}
    );

const connection = mongoose.connection;
connection.once('open', () => {
    console.log(`MongoDB  database connection established succesfully`)
})

const exerciseRouter = require('./routes/exercise')
const usersRouter = require('./routes/users')

app.use('/exercises', exerciseRouter)
app.use('/users', usersRouter)

app.listen(port, ()=>{
    console.log(`server is running on port: ${port}`);
});

