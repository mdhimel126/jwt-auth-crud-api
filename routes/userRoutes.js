import express from "express";

import { registerUser,loginUser}from "../controllers/userController.js";

import authMiddleware from "../middleware/authMiddleware.js";

import User from "../models/User.js"

const router=express.Router();


router.post("/register",registerUser);

router.post("/login",loginUser);

router.get("/profile",authMiddleware,async(req,res)=>{
    const user= await User.findById(req.user.id).select("-password");

    res.json(user);
});

router.get("/users", async(req,res)=>{
    const users=await User.find().select("-password");

    res.json(users);
});

router.get("/users/:id", async(req,res)=>{
    const user=await User.findById(req.params.id).select("-password");

    res.json(user);
});

router.put("/users/:id",async(req,res)=>{
    const updatedUser=await User.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new:true
        }
    );

    res.json(updatedUser);
});

router.delete("/users/:id",async(req,res)=>{
    await User.findByIdAndDelete(req.params.id);

    res.json({
        message:"User deleted successfully"
    });
});

export default router;