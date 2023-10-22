const express = require('express');
const chats = require('./data/data');
const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 8080

app.get('/' , (req , res) => {
    res.send('API is running');
})

// endpoint for displaying all the chats
app.get('/api/chat' , (req , res) => {
    res.send(chats);
})

// endpoint for displaying particular chat by its id
app.get('/api/chat/:id' , (req , res) => {
    // console.log(req.params.id);
    const singleChat = chats.find(c => c._id === req.params.id)
    res.send(singleChat);
})

app.listen(PORT , () => {
    console.log(`server running at ${PORT}`);
})