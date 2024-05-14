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
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import MyLogo from '../../src/bg/logo.png'; // Assuming MyLogo is the path to your logo image
import Drawer from '@mui/material/Drawer';

const pages = [
  { label: 'Lunch App', url: 'src/components/Launchapp' },
  { label: 'Apply For IDO', url: 'https://docs.google.com/forms/d/149VVPVL__zzpF1TdFdSSlQpgjRCS4mROK0sO7vTTP94/viewform?edit_requested=true' },
  { label: 'White Paper', url: 'https://docs.cardence.io/' }
];

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
    setDrawerOpen(true);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setDrawerOpen(false);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleMenuItemClick = (url) => {
    window.open(url, '_blank');
    handleCloseNavMenu();
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: scrolled ? "#0F0438" : "transparent" }}>
      <Container>
        <Toolbar>
          <IconButton
            size="large"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
            sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
          >
            <MenuIcon />
          </IconButton>
          <img src={MyLogo} alt="My Logo" sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography variant="h6" noWrap component="a" href="" sx={{ mr: 1, display: { xs: 'flex', md: 'none' }, fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', color: 'inherit', textDecoration: 'none' }}></Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            {/* Drawer implementation */}
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={handleCloseNavMenu}
            >
              <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={handleCloseNavMenu}
                onKeyDown={handleCloseNavMenu}
              >
                {pages.map((page) => (
                  <Button key={page.label} sx={{ my: 2 }} onClick={() => handleMenuItemClick(page.url)}>
                    <Typography>{page.label}</Typography>
                  </Button>
                ))}
              </Box>
            </Drawer>
          </Box>
          <Typography variant="h5" noWrap component="a" href="#app-bar-with-responsive-menu" sx={{ mr: 2, display: { xs: 'flex', md: 'none' }, flexGrow: 1, fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', color: 'inherit', textDecoration: 'none' }}></Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button key={page.label} sx={{ my: 2, color: 'white', display: 'block' }} onClick={() => handleMenuItemClick(page.url)}>
                {page.label}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Connect">
              <Button onClick={handleOpenUserMenu} sx={{ p: "10px 40px", color: "white", background: "#AB41BF", boxShadow: "rgba(182, 0, 211, 0.7) 0px 0px 13px", borderRadius: "24px" }}>Connect</Button>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;