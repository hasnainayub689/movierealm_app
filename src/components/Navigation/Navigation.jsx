import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { useTheme } from '@mui/material/styles';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Avatar from '@mui/material/Avatar';
import useMediaQuery from '@mui/material/useMediaQuery';
import Drawer from '@mui/material/Drawer';
import Sidebar from '../Sidebar/Sidebar';

function Navigation() {
    const theme = useTheme();
    const isAuthenticated = true;
    const isMobile = useMediaQuery('(max-width:650px)');
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <>
            <AppBar position="fixed">
                <Toolbar className="flex h-20 justify-between lg:ml-[240px] md:ml-5 sm:ml-4">
                    <IconButton
                        color="inherit"
                        sx={{ display: { xl: 'none' } }}
                        style={{ outline: 'none' }}
                        edge="start"
                        onClick={() => {}}
                        className="mr-2 sm:ml-0 sm:flex-wrap"
                    >
                        <MenuIcon />
                    </IconButton>
                    <IconButton
                        color="inherit" // corrected typo here
                        sx={{ ml: 1 }}
                        onClick={() => {}}
                    >
                        {' '}
                        {theme.palette.mode === 'dark' ? (
                            <Brightness7Icon />
                        ) : (
                            <Brightness4Icon />
                        )}
                    </IconButton>
                    <div className=" sm:hidden ">
                        {!isAuthenticated ? (
                            <Button color="inherit" onClick={() => {}}>
                                Login In &nbsp; <AccountCircleIcon />
                            </Button>
                        ) : (
                            <Button
                                color="inherit"
                                to={`/profile/:id`}
                                className=" hover:text-white "
                                onClick={() => {}}
                            >
                                <div className="sm:hidden">
                                    My Movies &nbsp;
                                </div>
                                <Avatar
                                    alt="profile"
                                    src="https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg"
                                />
                            </Button>
                        )}
                    </div>
                    <div className="lg:block">...Search</div>
                    {!isMobile ? (
                        <div className="flex items-center">
                            <div className="hidden lg:block">
                                My Movies &nbsp;
                            </div>
                            <Avatar
                                className="hidden lg:block"
                                alt="profile"
                                src="https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg"
                            />
                        </div>
                    ) : (
                        <></>
                    )}
                </Toolbar>
            </AppBar>
            <div>
                <nav className="">
                    {isMobile ? (
                        <Drawer
                            variant="temporary"
                            anchor="right"
                            open={mobileOpen}
                            ModalProps={{ keepMounted: true }}
                            className=" sm:block w-60 "
                        >
                            <Sidebar setMobileOpen={setMobileOpen} />
                        </Drawer>
                    ) : (
                        <Drawer
                            className="  w-60  flex-shrink-0 "
                            variant="permanent"
                            open={open}
                        >
                            <Sidebar setMobileOpen={setMobileOpen} />
                        </Drawer>
                    )}
                </nav>
            </div>
        </>
    );
}

export default Navigation;
