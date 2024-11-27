import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const PowerConsumptionGraph = () => (
  <Card>
    <CardContent>
      <Typography variant="h6">Average Power Consumption (kWh)</Typography>
      <img src="https://via.placeholder.com/400x150" alt="Line Chart" />
    </CardContent>
  </Card>
);

export default PowerConsumptionGraph;