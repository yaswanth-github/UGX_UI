import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const CurrentConsumptionGraph = () => (
  <Card>
    <CardContent>
      <Typography variant="h6">Current Power Consumption (kWh)</Typography>
      <Typography variant="h4" color="primary" style={{ textAlign: 'center' }}>1635.00</Typography>
      <img src="https://via.placeholder.com/400x150" alt="Bar Graph" />
    </CardContent>
  </Card>
);

export default CurrentConsumptionGraph;