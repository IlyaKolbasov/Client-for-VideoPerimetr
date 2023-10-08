import React from 'react';
import {Stack, Typography} from "@mui/material";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import Logo from "../Logo";
import { style } from './style';

const Footer = () => {
    return (
        <Stack 
          id="contact" 
          direction="row" 
          sx={style}
          component="footer"
        >
            <Logo />
            <Stack>

            </Stack>
            <Stack>
               <Stack direction="row">
                   <LocalPhoneIcon />
                   <Typography>
                       +375 (29) 757-35-99
                   </Typography>
               </Stack>
                <Stack direction="row">
                    <EmailIcon />
                    <Typography>
                        videoperimetr_by@mail.ru
                    </Typography>
                </Stack>

            </Stack>
            <Stack>
                <Stack direction="row">
                    <Typography>
                        Время работы офиса
                    </Typography>
                </Stack>
                <Typography>
                    Пн-Пт 8:00 - 17:00
                </Typography>
                <Typography>
                    Обед 13:00 - 13:45
                </Typography>
            </Stack>
            <Stack>
                <Typography>г. Молодечно,</Typography>
                <Typography>
                    ул. Великий Гостинец,
                </Typography>
                <Typography>
                    д. 143б, каб. 556
                </Typography>
            </Stack>
        </Stack>
        );
};

export default Footer;