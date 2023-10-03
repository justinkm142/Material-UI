import React from 'react'

//material ui componants 
import { Box, AppBar, Toolbar, Typography, InputBase,Badge, Avatar, Menu,MenuItem} from '@mui/material'
import styled from '@emotion/styled'
import FavoriteIcon from '@mui/icons-material/Favorite';
import MailIcon from '@mui/icons-material/Mail';
import {Notifications} from '@mui/icons-material';

//user componants 


//user styling

const StyledToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent:"space-between"
})

const Search = styled("div")(({theme})=>({
  backgroundColor : "white",
  borderRadius:"10px",
  width:"40%",
  padding:'0 10px 0 10px'
}))

const Icons = styled(Box)(({ theme }) => ({
  alignItems: 'center',
  gap: '20px',
}));

const UserBox = styled(Box)(({theme})=>({
  display:'flex',
  alignItems:'center',
  gap:'10px'
}))

function Navbar() {

// State Management 
  const [open, setOpen] = React.useState(false)


 
  return (
    <AppBar position='sticky'>
      <StyledToolbar>
          <Typography variant='h6' sx={{display:{xs:'none', sm:'block'}}}>
            Justin Ui
          </Typography>
          <FavoriteIcon sx={{display:{xs:'block', sm:'none'}}} />
          <Search><InputBase  placeholder='search...' sx={{width:'100%'}} /></Search>   
          <Icons sx={{display:{xs:'none', sm:'flex'}}}>
                <Badge badgeContent={4} color="error">
                  <MailIcon />
                </Badge>
                <Badge badgeContent={4} color="error">
                  <Notifications />
                </Badge>
                <Avatar sx={{width:'30px', height:'30px', cursor:"pointer"}} onClick={()=>setOpen(true)} />
          </Icons>
          <UserBox sx={{display:{xs:'flex', sm:'none', cursor:'pointer'}}} onClick={()=>setOpen(true)}>
                <Avatar sx={{width:'30px', height:'30px'}}   />
                <Typography variant='span'> John</Typography>

          </UserBox>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        open={open}
        onClose={()=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>



      </StyledToolbar>
      </AppBar>
  )
}

export default Navbar




