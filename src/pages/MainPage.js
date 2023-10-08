import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import SignUp from "../components/Form";

import Box from "@mui/material/Box";
import Info from "../components/Info";
import Problems from "../components/Problems";
import Map from "../components/Map";
import AboutUs from "../components/AboutUs";
import MySwiper from "../components/Swiper";
import Heading from "../components/Heading";

export const MainPage = () => {

  return (
    <Box sx={{ fontFamily: "Noto Serif" }}>
      <MySwiper />
      <Heading/>
      <Info />
      <AboutUs />
      <Problems />
      <Map />
      <SignUp />
    </Box>
  );
};

