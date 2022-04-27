import * as React from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { signIn, signOut } from "../near";

interface NavBarProps {
  currentUser: any;
}

const pages = ["Create", "View", "Discover"];

const NavBar = ({ currentUser }: NavBarProps): JSX.Element => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const navigate = useNavigate();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "white",
        padding: "0 20px",
        borderBottom: "4px solid rgb(136, 230, 251)",
        boxShadow: "0 4px 2px -2px rgba(0,0,0,0.12)"
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            onClick={() => navigate("/")}
            variant="h6"
            noWrap
            component="div"
            color="text.primary"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex", cursor: "pointer" },
            }}
          >
            NEARSea
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={() => navigate(`/${page.toLowerCase()}`)}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            onClick={() => navigate("/")}
            variant="h6"
            noWrap
            component="div"
            color="text.primary"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none", cursor: "pointer" },
            }}
          >
            NEARSea
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => navigate(`/${page.toLowerCase()}`)}
                sx={{ my: 2, display: "block" }}
              >
                <Typography color="text.primary">{page}</Typography>
              </Button>
            ))}
          </Box>
          {currentUser ? (
            <Typography color="text.primary">{currentUser.accountId}</Typography>
          ) : (<Typography color="text.primary"></Typography>)}
          <Box sx={{ flexGrow: 0 }}>
            {currentUser ? (
              <Button sx={{ my: 2, display: "block" }} onClick={signOut}>
                <Typography color="text.primary">Sign out</Typography>
              </Button>
            ) : (
              <Button sx={{ my: 2, display: "block" }} onClick={signIn}>
                <Typography color="text.primary">Log in</Typography>
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;
