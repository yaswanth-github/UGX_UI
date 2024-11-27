import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const PowerUsageCard = ({ title, count, power }) => (
  <Card style={{ marginBottom: '15px' }}>
    <CardContent>
      <Typography variant="h6">{title}</Typography>
      <Typography variant="body1">Count: {count}</Typography>
      <Typography variant="body1">Power Consumption: {power} kWh</Typography>
    </CardContent>
  </Card>
);

export default PowerUsageCard;