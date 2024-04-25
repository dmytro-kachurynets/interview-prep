// Header.js
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#2196f3' }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, display: { xs: 'block', md: 'none' } }}
          onClick={handleDrawerOpen}
        >
          <MenuIcon />
        </IconButton>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', color: 'white', textDecoration: 'none' }}>
          <Typography variant="h6" component="div">
            Tech Interview Prep
          </Typography>
        </Link>
        <div style={{ flexGrow: 1 }} />
        <Button color="inherit" component={Link} to="/javascript" sx={{ display: { xs: 'none', md: 'block' } }}>
          JavaScript
        </Button>
        <Button color="inherit" component={Link} to="/react" sx={{ display: { xs: 'none', md: 'block' } }}>
          React
        </Button>
        <Button color="inherit" component={Link} to="/node" sx={{ display: { xs: 'none', md: 'block' } }}>
          Node.js
        </Button>
      </Toolbar>
      <Drawer anchor="left" open={open} onClose={handleDrawerClose}>
        <List>
          <ListItem button component={Link} to="/javascript" onClick={handleDrawerClose}>
            <ListItemText primary="JavaScript" />
          </ListItem>
          <ListItem button component={Link} to="/react" onClick={handleDrawerClose}>
            <ListItemText primary="React" />
          </ListItem>
          <ListItem button component={Link} to="/node" onClick={handleDrawerClose}>
            <ListItemText primary="Node.js" />
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Header;
