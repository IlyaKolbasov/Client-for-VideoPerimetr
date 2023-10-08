import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  Modal,
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  useTheme,
  Box,
  Backdrop,
  Fade,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { pages } from "./constants";
import { Link, animateScroll as scroll } from "react-scroll";
import { style } from "../Header/constants";
import { LoginPage } from "../../pages/LoginPage";

export const DrawerComp = ({ user, setUser }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open, setOpen] = useState(false);

  return (
    <>
    
    <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <LoginPage setUser={setUser} handleClose={handleClose} />
            </Box>
          </Fade>
        </Modal>

      <SwipeableDrawer
        id="mob-menu"
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        style={{ width: "100%" }}
      >
        <List sx={{ width: "220px", pt: "15px" }}>
          {pages.map((page, index) => (
            <ListItemButton
              key={index}
              sx={{ textAlign: "center", fontSize: "15px" }}
            >
              <ListItemIcon>
                <Link
                  to={page.href}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  <ListItemText>{page.title}</ListItemText>
                </Link>
              </ListItemIcon>
            </ListItemButton>
          ))}
          <ListItemButton
            sx={{ textAlign: "center", fontSize: "15px" }}
          >
            <ListItemIcon>
                <ListItemText onClick={handleOpen}>Войти</ListItemText>
            </ListItemIcon>
          </ListItemButton>

        </List>
      </SwipeableDrawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
    </>
  );
};
