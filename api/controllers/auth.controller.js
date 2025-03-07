import User from "../models/user.model.js"
import bcryptjs from 'bcryptjs'
import {errorHandler} from '../utils/error.js'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'


export const signup =  async (req,res,next)=>{
    const {username,email,password}= req.body;
    if(!username || 
        !email || 
        !password || 
        username===''
        || email===''
        || password===''
    ) {
        next(errorHandler(400,'All fields are required'))
    }
    const hashedPassword=bcryptjs.hashSync(password,10); 
    const newUser=new User({
        username,email,password:hashedPassword
    });

    try{
        
    await newUser.save();
    res.json("Signup successful");

    }
    catch(err){
        next(err);
    }
}
dotenv.config()
export const signin = async (req,res,next)=>{
    const{email,password}=req.body; 
    if( !email || 
        !password || 
        email==='' ||
         password===''
    ){
        next(errorHandler(400,'Fill out both fields'))
    }
    const hashedPassword=bcryptjs.hashSync(password,10);
    try{
        const validUser=await User.findOne({email})
        if(!validUser){
            next(errorHandler(404,'User not found'))
        }
        const matchValidPassword=bcryptjs.compareSync(password,validUser.password);
        if(!matchValidPassword){
            return next(errorHandler(400,'Invalid credentials'))
        }   
        const token=jwt.sign({id:validUser._id,isAdmin:validUser.isAdmin },process.env.JWT_SECRET);
        const{password:pass,...rest}=validUser._doc;
        res.status(200).cookie('secrettoken',token,{httpOnly:true,}).json(rest)
    } 
    catch(err){
        next(err)
    }
    
}
export const google= async (req,res,next)=>{
    const {name,email,googlePhotoURL}=req.body;
    try{
        const existingUser=await User
        .findOne({email})
        if(existingUser){
            const token=jwt.sign({id:existingUser._id,isAdmin:existingUser.isAdmin},process.env.JWT_SECRET);
            const {password, ...rest}= existingUser._doc;
            res.status(200).cookie('access_token',token,{
                httpOnly:true,
            }).json(rest)
        }
        else{
            const generatedPassword= Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);   
            const hashedPassword=bcryptjs.hashSync(generatedPassword,10);
            const newUser=new User({
                username:name.toLowerCase().split(' ').join('') + Math.random().toString(9).slice(-4),
                email,
                password:hashedPassword,
                profilePicture:googlePhotoURL
            })
            await newUser.save();
            const token=jwt.sign({id:newUser._id,isAdmin:newUser.isAdmin},process.env.JWT_SECRET);
            const{password,...rest}=newUser._doc;
            res.status(200).cookie('access_token',token,{httpOnly:true}).json(rest)
        }
    }
    catch(err){
        next(err)
    }
}
//6:14:32