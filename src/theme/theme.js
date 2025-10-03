'use client';

import { createTheme } from '@mui/material/styles';
export let colors = {
    primary: '#ffffff',
    secondary: '#F5F5F5',
    hover: '#F5F5F5',
    gray: '#F5F5F5',
    error: "#EE413D",
    success: "#008743",
};

export const drawerWidth = 260;

export const getCustomTheme = (primary = colors.primary, secondary = colors.secondary, error = colors.error, success = colors.success) => {
    colors = {
        primary: primary,
        secondary: secondary,
        hover: primary,
        gray: '#F5F5F5',
        error: error,
        success: success,
    };
    const base = createTheme({
        palette: {
            primary: {
                light: primary,
                main: primary,
                dark: primary,
                contrastText: '#fff',
            },
            secondary: {
                light: secondary,
                main: secondary,
                dark: secondary,
                contrastText: '#000',
            },
            text: {
                // primary: colors.primary,
                primary: "#111111",
            },
            error: {
                main: error,
            },
            success: {
                main: success
            }
        },
    });

    return createTheme(base, {
        typography: {
            // fontFamily: robotoLocal.style.fontFamily,
            h5: {
                fontWeight: 500,
                fontSize: "18px"
            },
            formHeading: {
                fontWeight: 500,
                // color: base.palette.secondary.main,
                fontSize: "22px",
                display: "block",
            },
            subtitle1: {
                fontSize: "18px",
            },
        },
        components: {
            MuiDrawer: {
                styleOverrides: {
                    root: {
                        "&.adminDashboardContainer": {
                            "& .MuiListItemButton-root": {
                                "& .MuiListItemIcon-root": {
                                    minWidth: "35px",
                                },
                                "&.Mui-selected": {
                                    backgroundColor: base.palette.secondary.main
                                },
                            }
                        }
                    }
                }
            }
        },


        breakpoints: {
            values: {
                xs: 0,
                sd: 410,
                sm: 576,
                md: 768,
                lg: 991,
                xl: 1050,
                xxl: 1440
            }
        }
    });
};


const theme = getCustomTheme();

export default theme;