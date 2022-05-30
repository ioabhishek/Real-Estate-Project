const express=require('express');
const bcrypt = require("bcrypt");
const router= new express.Router;
const userdb=require('../model/user');
const app=express();
const jwt = require('jsonwebtoken');


router.post('/register',async(req,res)=>{
    
    try{
        const hashPass = await bcrypt.hash(req.body.password, 10);
        
        const newuser= new userdb({
        ...req.body,
        password:hashPass,
        confirmPassword: hashPass
    })

    
    res.json({
        status:'success',
        data:await newuser.save()
    })}

    catch(err){
        res.json({
            status:'error',
            message:"user is already register"
        });
    }
    
})
router.post('/login',async(req,res)=>{
    let user=await userdb.findOne({email:req.body.email});
    if (!user){
        return res.status(400).json({
            status:'failed',
            message:'user is not register'
        })
    }
    const isValid = await bcrypt.compare(req.body.password, user.password);

    if (!isValid) {
        return res.json({
          status: "not authorize",
          message: "Password is wrong",
        });
      }
    
      var token = jwt.sign({ _id: user._id },"  " + process.env.SECRET_KEY);
    
      res.json({
        status: "success",
        token: token,
      });
    });
    
module.exports=router;