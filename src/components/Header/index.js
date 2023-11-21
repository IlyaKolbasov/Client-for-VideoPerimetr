import React, { useState, useEffect } from "react";
import {
  AppBar,
  Button,
  IconButton,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  useTheme,
  Modal,
  Box,
  Backdrop,
  Fade,
} from "@mui/material";
import { DrawerComp } from "../Drawer";
import PersonIcon from "@mui/icons-material/Person";
import Logo from "../Logo";
import { Link, animateScroll as scroll } from "react-scroll";
import { LoginPage } from "../../pages/LoginPage";
import { useNavigate } from "react-router-dom";
import { ADMIN_ROUTE, ADMIN_ROUTE_2 } from "../../constants/routes";
import { style, appBarStyle, toolBarStyle, tabStyle } from "./constants";

let previousScroll = 0;

const Header = ({ user, setUser }) => {
  const [value, setValue] = useState();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = (e) => {
    const header = document.querySelector("header");
    const scrollTop = window.scrollY;
    scrollTop <= 250
      ? header.classList.remove("header-hidden")
      : header.classList.add("header-hidden");
    previousScroll >= scrollTop
      ? header.classList.remove("header-hidden")
      : header.classList.add("header-hidden");
    if (scrollTop < 0) header.classList.remove("header-hidden");
    previousScroll = scrollTop;
  };

  return (
    <>
      <div>
        <Button onClick={handleOpen}>Open modal</Button>
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
      </div>

      <>
        <AppBar sx={appBarStyle}>
          <Toolbar sx={toolBarStyle}>
            <Link
              to="swiper"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <Logo />
            </Link>
            {isMatch ? (
              <>
                <DrawerComp user={user} setUser={setUser} />
              </>
            ) : (
              <>
                <Tabs
                  sx={{ marginLeft: "auto", marginRight: "auto" }}
                  // indicatorColor="secondary"
                  disableFocusRipple
                  textColor="white"
                  value={value}
                  onChange={(e, value) => setValue(value)}
                >
                  <Link
                    to="about-us-block"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <Tab label="О нас" sx={tabStyle} />
                  </Link>
                  <Link
                    to="problem-block"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <Tab label="Наши услуги" sx={tabStyle} />
                  </Link>
                  <Link
                    to="sign-up"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <Tab label="Запрос записей" sx={tabStyle} />
                  </Link>
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    <Tab label="Контакты" sx={tabStyle} />
                  </Link>

                  {user && user.authorities === "ADMIN" && (
                    <>
                      <Tab
                        label="Взять запросы"
                        sx={tabStyle}
                        onClick={() => navigate(ADMIN_ROUTE)}
                      />
                      <Tab
                        label="В процессе"
                        sx={tabStyle}
                        onClick={() => navigate(ADMIN_ROUTE_2)}
                      />
                    </>
                  )}
                </Tabs>
                <IconButton>
                  <PersonIcon sx={{ color: "white" }} onClick={handleOpen} />
                </IconButton>
              </>
            )}
          </Toolbar>
        </AppBar>
      </>
    </>
  );
};

export default Header;
