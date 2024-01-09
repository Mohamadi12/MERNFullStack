import React, { useEffect, useState } from 'react'
import{ TextField,Button, Typography, Paper } from '@mui/material';
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import './form.css';
import { createPost, updatePost } from '../../api';
import { createPosts, updatePosted } from '../../redux/postsSlice';


const Form = ({ currentId,setCurrentId }) => {
  const[postData, setPostData]=useState({ creator:'', title:'', message:'', tags:'', selectedFile:''})
  // Objectif d'edité quand on click que ça renvoie dans le champ du frmulaire
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));  
  const dispatch=useDispatch()
  // Objectif d'edité quand on click que ça renvoie dans le champ du frmulaire
  useEffect(()=>{
    if(post) setPostData(post)
  },[post])

  const creatorPost=async(values)=>{
    try {
      const data=await createPost(values)
      dispatch(createPosts(data))
    } catch (error) {
      console.log(error.message)
    }
  }

  const updated=async(id, values)=>{
    try {
      const data=await updatePost(id, values)
      dispatch(updatePosted(data))
    } catch (error) {
      console.log(error.message)
    }
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(currentId){
      updated(currentId,postData)
    } else{
      creatorPost(postData)
    }
  }
  const clear=()=>{

  }
  return (
    <Paper className='paper'>
      <form autoComplete='off' noValidate className='${root} ${form}' onSubmit={handleSubmit}>
        <Typography variant='h6'>Creating a Memory</Typography>
        <TextField name='creator' variant='outlined' label='Creator' fullWidth value={postData.creator} onChange={(e)=>setPostData({...postData, creator:e.target.value})}/>
        <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
        <TextField name="message" variant="outlined" label="Message" fullWidth multiline rows={4} value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
        <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
        <Button className="buttonSubmit" variant='contained' color='primary' size='large' type='submit' fullWidth>Submit</Button>
        <Button variant='contained' color='secondary' size='small' onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  )
}

export default Form
