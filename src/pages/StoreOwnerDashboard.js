import React, { useState, useEffect } from 'react';
import {
  Container,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Rating,
  Grid,
} from '@mui/material';
import axios from 'axios';

const StoreOwnerDashboard = () => {
  const [storeData, setStoreData] = useState(null);
  const [ratings, setRatings] = useState([]);
  const [averageRating, setAverageRating] = useState(0);

  useEffect(() => {
    fetchStoreData();
    fetchRatings();
  }, []);

  const fetchStoreData = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:3001/api/store-owner/store', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setStoreData(response.data);
    } catch (error) {
      console.error('Error fetching store data:', error);
    }
  };

  const fetchRatings = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:3001/api/store-owner/ratings', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setRatings(response.data);
      
      // Calculate average rating
      if (response.data.length > 0) {
        const sum = response.data.reduce((acc, rating) => acc + rating.value, 0);
        setAverageRating(sum / response.data.length);
      }
    } catch (error) {
      console.error('Error fetching ratings:', error);
    }
  };

  if (!storeData) {
    return (
      <Container>
        <Typography>Loading...</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Store Dashboard
        </Typography>

        {/* Store Information */}
        <Paper sx={{ p: 3, mb: 4 }}>
          <Typography variant="h5" gutterBottom>
            Store Information
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1">
                <strong>Name:</strong> {storeData.name}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1">
                <strong>Email:</strong> {storeData.email}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1">
                <strong>Address:</strong> {storeData.address}
              </Typography>
            </Grid>
          </Grid>
        </Paper>

        {/* Rating Statistics */}
        <Paper sx={{ p: 3, mb: 4 }}>
          <Typography variant="h5" gutterBottom>
            Rating Statistics
          </Typography>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1">
                <strong>Average Rating:</strong>
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Rating value={averageRating} readOnly precision={0.1} />
                <Typography variant="body1" sx={{ ml: 1 }}>
                  ({averageRating.toFixed(1)}/5)
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography variant="subtitle1">
                <strong>Total Ratings:</strong> {ratings.length}
              </Typography>
            </Grid>
          </Grid>
        </Paper>

        {/* Ratings Table */}
        <Typography variant="h5" gutterBottom>
          User Ratings
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>User Name</TableCell>
                <TableCell>Rating</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ratings.map((rating) => (
                <TableRow key={rating.id}>
                  <TableCell>{rating.userName}</TableCell>
                  <TableCell>
                    <Rating value={rating.value} readOnly />
                  </TableCell>
                  <TableCell>
                    {new Date(rating.createdAt).toLocaleDateString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

export default StoreOwnerDashboard; 