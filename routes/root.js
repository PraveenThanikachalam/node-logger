import express from "express";

const app = express();


const router = app.get(`^/$|/index(.html)?`,(req,res,next)=>{
    res.status(201).json({message : "Hi from the Home page!"})
    
}) 

export default router;