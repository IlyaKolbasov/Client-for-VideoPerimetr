import React from 'react';
import '../../header.css';
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <Link to="/">
            <div id="logo">
            <div id="kolDiv">
                <div id="kol">
                    VIDEO.
                </div>
            </div>
            <div id="camDiv">
                <div id="cam">
                    PERIMETR
                </div>
            </div>
        </div>
        </Link>
    );
};

export default Logo;