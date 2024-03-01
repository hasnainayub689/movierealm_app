import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const redLogo =
    'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';
const blueLogo =
    'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';

const Sidebar = ({ setMobileOpen }) => {
    const theme = useTheme(); // Get current theme
    return (
        <Link to="/" className="flex justify-center py-10 px-0">
            <img
                src={theme.palette.mode === 'dark' ? blueLogo : redLogo}
                alt="logo"
                className="w-[70%]"
            />
        </Link>
    );
};

export default Sidebar;
