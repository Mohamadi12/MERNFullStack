import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment';
import './post.css';

const Post = ({ post,setCurrentId }) => {
  return (
    <Card className="card">
      <CardMedia className="media" image={post.selectedFile} title={post.title} />
      <div className="overlay">
        <Typography variant='h6'>{post.creator}</Typography>
        {/* La durée ago du post */}
        <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div className="overlay2">
        <Button style={{ color: 'white' }} size='small' onClick={() => setCurrentId(post.id)}>
          <MoreHorizIcon fontSize='default' />
        </Button>
      </div>
      <div className="details">
        <Typography variant='body2' color='textSecondary'>
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <CardContent>
        <Typography className='title' variant='h5' gutterBottom>
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className="cardActions">
        <Button size='small' color='primary' onClick={() => {}}>
          <ThumbUpAltOutlinedIcon fontSize='small' />
          Like {post.likeCount}
        </Button>
        <Button size='small' color='primary' onClick={() => {}}>
          <DeleteIcon fontSize='small' />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
