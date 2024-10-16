import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const BottomMobileMenu = () => {
  const location = useLocation();
  const [value, setValue] = React.useState(0);
  const {user} = useSelector((state)=> state.auth);

  const showOnPages = ["/", "/cart", "/search", "/wishlist", "/account", "/shop"];

  const isPageValid = showOnPages.includes(location.pathname);

  if (!isPageValid) {
    return null;
  }

  return (
    <Paper 
    sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 10 }}
    elevation={3}
    className='md:hidden'
  >
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      sx={{ fontSize: '14px' }}
    >
      <BottomNavigationAction 
        label="Home" 
        icon={<HomeIcon />} 
        component={Link} 
        to="/" 
      />
      <BottomNavigationAction 
        label="Cart" 
        icon={<ShoppingCartIcon />} 
        component={Link} 
        to="/cart" 
      />
      <BottomNavigationAction 
        label="Search" 
        icon={<SearchIcon />} 
        component={Link} 
        to="/search" 
      />
      <BottomNavigationAction 
        label="Wishlist" 
        icon={<FavoriteIcon />} 
        component={Link} 
        to="/wishlist" 
      />
      {user && user?._id && <BottomNavigationAction 
        label="Profile" 
        icon={<AccountCircleIcon />} 
        component={Link} 
        to="/user/profile" 
      />}
    </BottomNavigation>
  </Paper>
  );
};

export default BottomMobileMenu;
