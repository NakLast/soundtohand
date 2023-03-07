import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';

function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

  return (
    <Fragment>
        <AppBar position="fixed">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                >
                    LEARNING SIGN
                </Typography>

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                     size="large"
                     aria-label="account of current user"
                     aria-controls="menu-appbar"
                     aria-haspopup="true"
                     onClick={handleOpenNavMenu}
                     color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                        }}
                    >
                        <MenuItem
                        component={ Link } to='/'
                        onClick={handleCloseNavMenu}
                        >
                            <Typography textAlign="center"> How to use </Typography>
                        </MenuItem>
                        <MenuItem
                        component={ Link } to='VoiceToHand'
                        onClick={handleCloseNavMenu}
                        >
                            <Typography textAlign="center"> VoiceToHand </Typography>
                        </MenuItem>
                        <MenuItem
                        component={ Link } to='TextToHand'
                        onClick={handleCloseNavMenu}
                        >
                            <Typography textAlign="center"> TextToHand </Typography>
                        </MenuItem>
                    </Menu>
                </Box>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                >
                    LEARNING SIGN
                </Typography>
                &nbsp;
                &nbsp;
                <Box 
                    sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
                >
                    <Button 
                        // variant='contained'
                        component={ Link } to='/'
                        // onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        How to use
                    </Button>
                    &nbsp;
                    &nbsp;
                    <Button 
                        // variant='contained'
                        component={ Link } to='VoiceToHand'
                        // onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        VoiceToHand
                    </Button>
                    &nbsp;
                    &nbsp;
                    <Button 
                        // variant='contained'
                        component={ Link } to='TextToHand'
                        // onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        TextToHand
                    </Button>
                </Box>
                </Toolbar>
            </Container>
        </AppBar>
    </Fragment>
  );
};

export default Header;