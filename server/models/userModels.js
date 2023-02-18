const mongoose= require('mongoose')
const bcrypt = require("bcrypt")

const userSchema= mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        required:true,
        default:false
    },
    pic:{
        type:String,
        required:true,
        default:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUJfNwZiS4wI_Nap4gVQmtaJf9990qhTEMwVipbWk1&s"
    },
},{timestamps:true})


//Encript the password
userSchema.pre('save',async function(next){
    if(!this.isModified('password')){
        next()
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password,salt)
})

//Dcrypt the password
userSchema.methods.matchPassword= async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password)
}

const User=mongoose.model("User",userSchema)
module.exports = User