import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const isAuthenticated = localStorage.getItem('token');
  const userRole = localStorage.getItem('userRole');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userRole');
    navigate('/login');
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Store Rating System
        </Typography>
        <Box>
          {!isAuthenticated ? (
            <>
              <Button color="inherit" component={RouterLink} to="/login">
                Login
              </Button>
              <Button color="inherit" component={RouterLink} to="/register">
                Register
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" component={RouterLink} to="/stores">
                Stores
              </Button>
              {userRole === 'admin' && (
                <Button color="inherit" component={RouterLink} to="/admin">
                  Admin Dashboard
                </Button>
              )}
              {userRole === 'user' && (
                <Button color="inherit" component={RouterLink} to="/user">
                  User Dashboard
                </Button>
              )}
              {userRole === 'store_owner' && (
                <Button color="inherit" component={RouterLink} to="/store-owner">
                  Store Dashboard
                </Button>
              )}
              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 