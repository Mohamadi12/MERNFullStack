import './App.css';
import{ Container,AppBar, Typography, Grow, Grid } from '@mui/material'
import memories from './images/memories.png'
import Posts from './component/Posts/Posts';
import Form from './component/Form/Form';
import './styles.css';
import { useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';
import { fetchPosts } from './redux/postsSlice';
import { fetchAllPosts } from './api';
import './index.css';



function App() {
  const[currentId,setCurrentId]=useState(null)
  const dispatch=useDispatch()

  const postAll=async()=>{
    const data=await fetchAllPosts()
    console.log('Ma data de db', data.posts)
    dispatch(fetchPosts(data.posts))
  }

  useEffect(()=>{
    postAll()
  },[])

  return (
    <Container maxWidth="lg">
    <AppBar className="appBar" position="static" color="inherit">
      <Typography className="heading" variant="h2" align="center">Memories</Typography>
      <img className="image" src={memories} alt="icon" height="60" />
    </AppBar>
    <Grow in>
      <Container>
        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={ setCurrentId }/>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={ currentId }/>
          </Grid>
        </Grid>
      </Container>
    </Grow>
    </Container>
  );
}

export default App;
