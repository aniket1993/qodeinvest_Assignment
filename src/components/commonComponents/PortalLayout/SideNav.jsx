'use client'
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { Box, List, ListItemButton, ListItemIcon } from "@mui/material";
import { useRouter } from "next/navigation";
// import { useSelector } from "react-redux";
import {  navItems } from "@/routes/route";

const drawerWidth = 250;

const SideNav = ({ mobileOpen, setMobileOpen, ...props }) => {
    // const classes = dashboardStyles();
    const { window } = props;
    const navigate = useRouter();

    const [selectedIndex, setSelectedIndex] = useState(sessionStorage.getItem("selectedIndex") || 'panel0');


    const container =
        window !== undefined ? () => window().document.body : undefined;


    const renderAccordionItem = (item, index) => {
        return (
            <ListItemButton
                key={`panel${index}`}
                selected={selectedIndex === `panel${index}`}
                className="Side_ListItemButton"
                onClick={(event) => {
                    sessionStorage.setItem("selectedIndex", `panel${index}`);
                    navigate.replace(item?.link);
                    setSelectedIndex(`panel${index}`);
                }}
            >
                {item.imageUrl && <ListItemIcon>
                    {item.icon}
                </ListItemIcon>}
                <Typography /* className={classes.accordionText} */>
                    {item.label}
                </Typography>
            </ListItemButton>
        )

    }
    return (
        <Box sx={{ display: "flex" }}>
            <Box
                component="nav"
                sx={{ width: { lg: drawerWidth }, flexShrink: { sm: 0 }, position: 'relative', height: "100vh" }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    className="adminDashboardContainer"
                    variant="temporary"
                    open={mobileOpen}
                    onClose={() => setMobileOpen(!mobileOpen)}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: "block", lg: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                    id="mobile_sideNav"
                >
                    {/* {drawer} */}
                    <List component="nav" sx={{ mt: 0 }} /* className={classes.appMenu} */ disablePadding>
                        {navItems && navItems.map((item, index) =>
                            renderAccordionItem(item, index)
                        )}
                    </List>
                </Drawer>

                <Drawer
                    variant="permanent"
                    className="adminDashboardContainer"
                    sx={{
                        display: { xs: "none", lg: "block" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                    open
                    id="web_sideNav"
                >
                    <List component="nav" sx={{ mt: 0 }} /* className={classes.appMenu} */ disablePadding>
                        {navItems && navItems.map((item, index) =>
                            renderAccordionItem(item, index)
                        )}
                    </List>
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 4,
                    mt: 7,
                    width: { lg: `calc(100% - ${drawerWidth}px)`, md: '100%' },
                }}

            >
                {props.children}
            </Box>
        </Box>
    );
};

export default SideNav;
