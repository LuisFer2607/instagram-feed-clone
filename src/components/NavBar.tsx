import React from 'react';
import TextField from '@mui/material/TextField';
import { AppBar, Toolbar, Typography, IconButton, InputAdornment } from '@mui/material';
import { Instagram, FavoriteBorderOutlined, ChatBubbleOutline, Search } from '@mui/icons-material';

const NavBar: React.FC = () => {
  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar>
        <Instagram sx={{ fontSize: 30, color: 'red' }} />
        <Typography variant="h6" sx={{ flexGrow: 1, marginLeft: 1, marginRight: 2 }}>
          Instagram
        </Typography>
        <TextField
          id="outlined-basic"
          label="Buscar"
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="end">
                <Search />
              </InputAdornment>
            ),
          }}
        />
        <IconButton>
          <FavoriteBorderOutlined />
        </IconButton>
        <IconButton>
          <ChatBubbleOutline />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;