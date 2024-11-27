import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

const navItems = [
  'Dashboard', 'Layouts', 'Mailbox', 'Calendar', 'UI Demands',
  'Forms', 'Tables', 'Charts', 'Maps', 'Profile'
];

const Sidebar = () => (
  <div style={{ width: '250px', padding: '20px', backgroundColor: '#f5f5f5', position: 'fixed', height: '100vh' }}>
    <Typography variant="h5" gutterBottom>Power Analytics</Typography>
    <List>
      {navItems.map((item) => (
        <ListItem button key={item}>
          <ListItemText primary={item} />
        </ListItem>
      ))}
    </List>
  </div>
);

export default Sidebar;