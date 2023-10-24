const express = require('express');
const chats = require('./data/data');
const connectDB = require('./config/database');
const app = express();
const colors = require('colors')
const userRoutes = require('./routes/userRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

require('dotenv').config();

// connecting to database
connectDB();

app.use(express.json()) // to accept JSON Data

const PORT = process.env.PORT || 8080

app.get('/' , (req , res) => {
    res.send('API is running');
})

// // endpoint for displaying all the chats
// app.get('/api/chat' , (req , res) => {
//     res.send(chats);
// })

// // endpoint for displaying particular chat by its id
// app.get('/api/chat/:id' , (req , res) => {
//     // console.log(req.params.id);
//     const singleChat = chats.find(c => c._id === req.params.id)
//     res.send(singleChat);
// })

app.use('/api/user' , userRoutes)

// error handling middlewares
app.use(notFound)
app.use(errorHandler)

app.listen(PORT , () => {
    console.log(`server running at ${PORT}`.yellow.bold);
})