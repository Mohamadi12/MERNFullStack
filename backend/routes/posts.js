const express=require('express')
const routers=express.Router()
const { getPosts, createPost, updatePost}=require('../controller/posts')

routers.get('/',getPosts)
routers.post('/',createPost)
routers.put('/:id',updatePost)











module.exports=routers