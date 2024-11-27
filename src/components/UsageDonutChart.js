import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const UsageDonutChart = () => (
  <Card>
    <CardContent>
      <Typography variant="h6">Power Consumption</Typography>
      <img src="https://via.placeholder.com/150" alt="Donut Chart" />
      <Typography variant="body1">17% used</Typography>
    </CardContent>
  </Card>
);

export default UsageDonutChart;