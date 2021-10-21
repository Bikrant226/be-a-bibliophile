const route=require('express').Router();
const User=require('../model/UserModel');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');


route.post('/Signup',(req,res)=>{
    try {
       User.findOne({email:req.body.email},async(err,success)=>{  
            if(success){
                res.send('Email already exists,please choose another!!');
            }else{
                const newUser=new User({
                    username:req.body.username,
                    email:req.body.email,
                    password:bcrypt.hashSync(req.body.password,10)
                })
                await newUser.save();
                res.status(200).send(newUser)
            }
       })
    } catch (error) {
        console.log(error)
    }
})



route.post('/Signin',async(req,res)=>{
    try{
        const user=await User.findOne({email:req.body.email});
        if(!user){
            res.status(401).send('Email doesn\'t exists');  
        }else{
            const validatePassword=await bcrypt.compareSync(req.body.password,user.password)
            if(!validatePassword){
                res.status(401).send('Incorrect Password')
            }else{
                res.status(200).send('hi')
            }
        } 
    }catch(err){
        console.log(err);
    }
})




module.exports=route;