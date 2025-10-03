'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import SideNav from '@/components/commonComponents/PortalLayout/SideNav';
import theme from '@/theme/theme';

export default function Layout({ children }) {
    const [mobileOpen, setMobileOpen] = useState(false);


    return (
        <ThemeProvider theme={theme}>
            <SideNav mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} >
                {children}
            </SideNav>
        </ThemeProvider>
    );
}
