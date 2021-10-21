const mongoose=require('mongoose');

const authSchema=new mongoose.Schema({
    username:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
},{
    timestamps:true
})

const authModel=mongoose.model('User',authSchema);

module.exports=authModel;