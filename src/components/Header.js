import React from 'react';
import { AppBar, Toolbar, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => (
  <AppBar position="static" style={{ backgroundColor: '#ffffff', color: '#000', paddingLeft: '300px' }}>
    <Toolbar>
      <div style={{ position: 'relative', marginRight: '20px' }}>
        <SearchIcon style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)' }} />
        <InputBase
          placeholder="Search..."
          style={{ padding: '5px 5px 5px 40px', border: '1px solid #ccc', borderRadius: '5px' }}
        />
      </div>
    </Toolbar>
  </AppBar>
);

export default Header;