import * as React from 'react';
// Imports for Appbar
import { styled, alpha } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
// Imports for Drawer
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import ListAltIcon from "@mui/icons-material/ListAlt";
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import LogoutIcon from '@mui/icons-material/Logout';
// Imports for NestedList
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ShuffleIcon from '@mui/icons-material/Shuffle';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(3),
    width: '85%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: '80%',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export default function Appbar({ currentPage, handlePageChange }) {
    const [state, setState] = React.useState({
        left: false
    });
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    }

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
        >
            <List
                onClick={toggleDrawer(anchor, false)}
                onKeyDown={toggleDrawer(anchor, false)}
            >
                <ListItem button key="Suggested Drinks" onClick={() => handlePageChange("Suggested")}>
                    <ListItemIcon>
                        <LocalBarIcon />
                    </ListItemIcon>
                    <ListItemText primary="Suggested Drinks" />
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItemButton key="Explore By" onClick={handleClick}>
                    <ListItemIcon>
                        <SearchIcon />
                    </ListItemIcon>
                    <ListItemText primary="Explore By" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse key="Collapse for Explore By" in={open} timeout="auto" unmountOnExit>
                    {[
                        "Letter",
                        "Ingredient",
                        "Glass",
                        "Category",
                        "Type"
                    ].map((text) => (
                        <List
                            component="div"
                            disablePadding
                            onClick={toggleDrawer(anchor, false)}
                            onKeyDown={toggleDrawer(anchor, false)}
                            key={text}
                        >
                            <ListItemButton sx={{ pl: 4 }}  onClick={() => handlePageChange(text)}>
                                <ListItemIcon>
                                    <ListAltIcon />
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </List>
                    ))}
                    <List
                        component="div"
                        disablePadding
                        onClick={toggleDrawer(anchor, false)}
                        onKeyDown={toggleDrawer(anchor, false)}
                    >
                        <ListItemButton sx={{ pl: 4 }} key="Random" onClick={() => handlePageChange("Random")}>
                            <ListItemIcon>
                                <ShuffleIcon />
                            </ListItemIcon>
                            <ListItemText primary="Random" />
                        </ListItemButton>
                    </List>
                </Collapse>
            </List>
            <Divider />
            <List
                onClick={toggleDrawer(anchor, false)}
                onKeyDown={toggleDrawer(anchor, false)}
            >
                <ListItem button key="Contact Us" onClick={() => handlePageChange("Contact")} >
                    <ListItemIcon>
                        <ContactSupportIcon />
                    </ListItemIcon>
                    <ListItemText primary="Contact Us" />
                </ListItem>
            </List>
            <Divider />
            <List
                sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, paddingBottom: 2 }}
                onClick={toggleDrawer(anchor, false)}
                onKeyDown={toggleDrawer(anchor, false)}
            >
                <ListItem button key="Logout">
                    <ListItemIcon>
                        <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                </ListItem>
            </List>
        </Box>
    );

    return (
        <Paper sx={{ position: 'fixed', top: 0, left: 0, right: 0 }} elevation={3}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar
                    position="static"
                >
                    <Toolbar>
                        <React.Fragment key="left">
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                sx={{ mr: 2 }}
                                onClick={toggleDrawer("left", true)}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Drawer
                                anchor="left"
                                open={state["left"]}
                                onClose={toggleDrawer("left", false)}
                            >
                                {list("left")}
                            </Drawer>
                        </React.Fragment>
                        <LocalBarIcon sx={{ marginRight: 1, display: { xs: 'none', sm: 'block' } }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ display: { xs: 'none', sm: 'contents' }, fontWeight: 'bold' }}
                        >
                            Bar-Hoppers
                        </Typography>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search by name or by ingredient..."
                                inputProps={{
                                    'aria-label': 'search'
                                }}
                            />
                        </Search>
                        <Box sx={{ flexGrow: 1 }} />
                    </Toolbar>
                </AppBar>
            </Box>
        </Paper>
    );
}