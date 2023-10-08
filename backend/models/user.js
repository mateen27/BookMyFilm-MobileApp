const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name : {
        type : String , 
        required : true
    } ,
    userName : {
        type : String , 
        required : true , 
        unique: true, // Ensure email addresses are unique
    } ,
    email : {
        type : String ,
        required : true , 
        unique: true, // Ensure email addresses are unique
    } , 
    password : {
        type : String , 
        required : true 
    } , 
    pic : {
        type : String , 
        // default image if user does not send any image
        default : 'https://images.unsplash.com/photo-1561505397-8e667b30ef2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80'
    }
})

module.exports = mongoose.model('User' , userSchema);