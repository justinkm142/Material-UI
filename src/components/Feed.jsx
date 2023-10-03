import React from 'react'


//material ui componant 
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'

import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { ExpandMore, Favorite, FavoriteBorder } from '@mui/icons-material';


//User Components 
import Post from './Post';

function Feed() {
  return (
    <Box flex={4} p={2}  >

    <Post /> 
    <Post />     
    <Post />     
    <Post />     
    <Post />     
    <Post />     
    <Post />         
      
    </Box>
  )
}

export default Feed