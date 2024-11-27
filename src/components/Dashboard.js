import React from 'react';
import { Grid, Typography } from '@mui/material';
import PowerUsageCard from './PowerUsageCard';
import PowerConsumptionGraph from './PowerConsumptionGraph';
import UsageDonutChart from './UsageDonutChart';
import CurrentConsumptionGraph from './CurrentConsumptionGraph';

const Dashboard = () => (
  <div style={{ margin: '20px', paddingLeft: '270px' }}>
    <Typography variant="h4" gutterBottom>Dashboard</Typography>
    <Grid container spacing={3}>
      <Grid item xs={12} md={6} lg={4}>
        <PowerUsageCard title="Fans" count={27} power={270} />
        <PowerUsageCard title="Lights" count={65} power={876} />
        <PowerUsageCard title="Refrigerator" count={4} power={0} />
        <PowerUsageCard title="Air Condition" count={852} power={65} />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <PowerConsumptionGraph />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <UsageDonutChart />
      </Grid>
      <Grid item xs={12} md={12} lg={8}>
        <CurrentConsumptionGraph />
      </Grid>
    </Grid>
  </div>
);

export default Dashboard;