import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTE, ADMIN_ROUTE_2 } from "../../constants/routes";
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
import PersonIcon from "@mui/icons-material/Person";
import { Link, animateScroll as scroll } from "react-scroll";
import { style } from "../Header/constants";
import { LoginPage } from "../../pages/LoginPage";

export const DrawerComp = ({ user, setUser, modal, signOut }) => {
  const [openDrawer, setOpenDrawer] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <>
      {/* <Modal
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
        </Modal> */}

      {/* <SwipeableDrawer */}
      <nav
        id="mob-menu"
        // anchor="right"
        // open={openDrawer}
        // onClose={() => setOpenDrawer(false)}
        // style={{ width: "100%" }}
        position="fixed"
        color="primary"
        sx={{ bottom: "0px", height: "60px" }}
      >
        <List
          sx={{
            backgroundColor: 'var(--black-color)',
            width: "220px",
            pt: "15px",
            height: "60px",
            margin: "0 auto",
            display: "flex",
            border: 'none'
          }}
        >
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
                  <img src={page.img} alt={page.title} loading="lazy" />
                  {/* <ListItemText>{page.title}</ListItemText> */}
                </Link>
              </ListItemIcon>
            </ListItemButton>
          ))}

          {user && user.authorities === "ADMIN" ? (
            <>
              <ListItemButton onClick={() => navigate(ADMIN_ROUTE)}>
                <ListItemIcon>
                  <ListItemText>
                    <img
                      src="/img/list-check-svgrepo-com.svg"
                      alt="Взять запросы"
                      loading="lazy"
                    />
                  </ListItemText>
                </ListItemIcon>
              </ListItemButton>
              <ListItemButton onClick={() => navigate(ADMIN_ROUTE_2)}>
                <ListItemIcon>
                  <ListItemText>
                    <img
                      src="/img/list-cross-svgrepo-com.svg"
                      alt="В процессе"
                      loading="lazy"
                    />
                  </ListItemText>
                </ListItemIcon>
              </ListItemButton>
              <ListItemButton onClick={signOut}>
                <ListItemIcon>
                  <ListItemText>
                    <img
                      src="/img/sign-out-svgrepo-com.svg"
                      alt="Выход"
                      loading="lazy"
                    />
                  </ListItemText>
                </ListItemIcon>
              </ListItemButton>
            </>
          ) :
              (
                  <ListItemButton
                      // sx={{ textAlign: "center", fontSize: "15px" }}
                      onClick={modal}
                  >
                      <ListItemIcon>
                          {/* <ListItemText onClick={handleOpen}><img src="/img/oborud.svg" alt="Контакты" loading="lazy"/></ListItemText> */}
                          <ListItemText>
                              <PersonIcon sx={{ color: 'white' }} />
                          </ListItemText>
                      </ListItemIcon>
                  </ListItemButton>
              )
          }
        </List>
        {/* </SwipeableDrawer> */}
      </nav>
      {/* <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton> */}
    </>
  );
};
