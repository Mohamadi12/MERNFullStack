const express=require('express')
const postSchema=require('../model/postMessage')

exports.getPosts=async(req,res)=>{
    try {
        const postMessages=await postSchema.find()
        res.status(200).json({message:postMessages})
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

exports.createPost=async(req,res)=>{
    // Au lieu de faire la destructuration,on le fera au niveau du frontend
    const post=req.body
    const newPost=new postSchema(post)
    try {
        await newPost.save()
        res.status(201).json({message:newPost})
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

exports.updatePost=async(req,res)=>{
    try {
        const {id}=req.params
        const updated=await postSchema.findByIdAndUpdate(id,{$set:{...req.body}})
        res.status(201).json({message:updated})
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}