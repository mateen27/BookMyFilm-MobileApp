const express = require('express')
const app = express();

app.post("/admin",(req,res)=>{
    const {movie_name,description,genre,language,price,rating} = req.body;
    if(!movie_name || !description || !genre || rating || price ||language){
        res.status(400);
        throw new Error("All fields are mandatory")
    }
    res.status(200).json({message:"Create contact"});

})