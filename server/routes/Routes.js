const route=require('express').Router();
const User=require('../model/UserModel');
const bcrypt=require('bcryptjs');
const razorpay=require('razorpay');
const jwt=require('jsonwebtoken');
const stripe=require('stripe')(process.env.STRIPE_KEY);


route.post('/Signup',(req,res)=>{
    try {
       User.findOne({email:req.body.email},async(err,success)=>{  
            if(success){
                res.status(401).send('Email already exists,please choose another!!');
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
            res.status(401).send('Email doesn\'t exists!!');  
        }else{
            const validatePassword=await bcrypt.compareSync(req.body.password,user.password)
            if(!validatePassword){
                res.status(401).send('Incorrect Password!!')
            }else{
                res.status(200).send('hi')
            }
        } 
    }catch(err){
        console.log(err);
    }
})



route.post('/buy',async(req,res)=>{
    const totalAmount=req.body.p
    try {
        const session=await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: [
            {
                price_data: {
                currency: "usd",
                product_data: {
                    name: "Book Store",
                    images: ["https://i.imgur.com/EHyR2nP.png"],
                },
                unit_amount: parseInt(totalAmount, 10) * 100,
                },
                quantity: 1,
            },
            ],
            mode: "payment"
            })
        console.log(totalAmount)
    } catch (error) {
        console.log(error)
    }
})

module.exports=route;